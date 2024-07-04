import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { rH } from '~/styles/responsive';
import { Colors } from '~/styles/colors';
import Animated, {
  SharedValue,
  clamp,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { debounce } from '~/utils/debounce';

const BALL_SIZE = rH(16);
const SCALE = 1.5;

export interface RangeSliderProps {
  lowerBound: number;
  upperBound: number;
  lowerValue: SharedValue<number>;
  upperValue: SharedValue<number>;
}

const RangeSlider: FC<RangeSliderProps> = (props) => {
  const [widthContainer, setWidthContainer] = useState(0);
  const UPPER_BOUND = widthContainer - BALL_SIZE;

  // Ball 1
  const posBall1 = useSharedValue(0);
  const prevPosBall1 = useSharedValue(0);
  const scaleBall1 = useSharedValue(1);
  // Ball 2
  const posBall2 = useSharedValue(0);
  const prevPosBall2 = useSharedValue(0);
  const scaleBall2 = useSharedValue(1);

  const exchange = useCallback(
    (x: number, l1: number, r1: number, l2: number, r2: number) => {
      'worklet';
      return Math.floor(((x - l1) / (r1 - l1)) * (r2 - l2) + l2);
    },
    []
  );

  // console.log(`props.lowerValue.value: ${props.lowerValue.value}`);
  // console.log(`props.upperValue.value: ${props.upperValue.value}`);

  useLayoutEffect(() => {
    // console.log('widthContainer: ', widthContainer);
    if (widthContainer == 0) {
      posBall2.value = prevPosBall2.value = UPPER_BOUND;
      return;
    }
    console.log(props);
    posBall1.value = prevPosBall1.value = withTiming(
      exchange(
        props.lowerValue.value,
        props.lowerBound,
        props.upperBound,
        0,
        UPPER_BOUND
      )
    );
    posBall2.value = prevPosBall2.value = withTiming(
      exchange(
        props.upperValue.value,
        props.lowerBound,
        props.upperBound,
        0,
        UPPER_BOUND
      )
    );
  }, [props.lowerValue.value, props.upperValue.value, widthContainer]);

  const pan1 = Gesture.Pan()
    .minDistance(1)
    .onBegin(() => {
      scaleBall1.value = withTiming(SCALE);
    })
    .onStart(() => {
      prevPosBall1.value = posBall1.value;
    })
    .onUpdate(({ translationX }) => {
      posBall1.value = clamp(
        prevPosBall1.value + translationX,
        0,
        posBall2.value - BALL_SIZE
      );
      props.lowerValue.value = exchange(
        posBall1.value,
        0,
        UPPER_BOUND,
        props.lowerBound,
        props.upperBound
      );
    })
    .onFinalize(() => {
      scaleBall1.value = withTiming(1);
    });

  const rS1 = useAnimatedStyle(() => ({
    transform: [{ translateX: posBall1.value }, { scale: scaleBall1.value }]
  }));

  const pan2 = Gesture.Pan()
    .minDistance(1)
    .onBegin(() => {
      scaleBall2.value = withTiming(SCALE);
    })
    .onStart(() => {
      prevPosBall2.value = posBall2.value;
    })
    .onUpdate(({ translationX }) => {
      posBall2.value = clamp(
        prevPosBall2.value + translationX,
        posBall1.value + BALL_SIZE,
        UPPER_BOUND
      );
      props.upperValue.value = exchange(
        posBall2.value,
        0,
        UPPER_BOUND,
        props.lowerBound,
        props.upperBound
      );
    })
    .onFinalize(() => {
      scaleBall2.value = withTiming(1);
    });

  const rS2 = useAnimatedStyle(() => ({
    transform: [{ translateX: posBall2.value }, { scale: scaleBall2.value }]
  }));

  const rS_Range = useAnimatedStyle(() => ({
    left: posBall1.value + BALL_SIZE / 2,
    width: posBall2.value - posBall1.value
  }));

  return (
    <View style={styles.container}>
      <View
        style={styles.track}
        onLayout={(event) => setWidthContainer(event.nativeEvent.layout.width)}
      />
      <Animated.View style={[styles.range, rS_Range]} />
      <GestureDetector gesture={pan1}>
        <Animated.View style={[styles.ball, rS1]} />
      </GestureDetector>
      <GestureDetector gesture={pan2}>
        <Animated.View style={[styles.ball, rS2]} />
      </GestureDetector>
    </View>
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  track: {
    height: rH(2),
    backgroundColor: Colors.primary,
    opacity: 0.5,
    borderRadius: 10
  },
  range: {
    position: 'absolute',
    left: 0,
    top: -rH(0.5),
    height: rH(3),
    width: 200,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    zIndex: 1
  },
  ball: {
    position: 'absolute',
    top: -BALL_SIZE / 2,
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_SIZE / 2,
    backgroundColor: Colors.primary,
    zIndex: 2
  }
});
