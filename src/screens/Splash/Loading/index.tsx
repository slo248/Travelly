import React, { useEffect, useMemo, useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useAnimatedProps,
  Easing,
  withDelay,
  runOnJS
} from 'react-native-reanimated';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { getPath } from './curve';
import { Colors } from '~/styles/colors';
import { rH, rW } from '~/styles/responsive';
import { ROUTES } from '~/navigation/routes';
import { RootStackParamList } from '~/navigation/types';

import PlaneSvg from '~/assets/svgs/plane.svg';
import SmallCircle from '~/assets/svgs/small_circle.svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function Loading() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const curveWidth = rW(278.43);
  const curveHeight = rH(23.8);

  const newOrigin = useRef([-30, -30]).current;

  const [slope, points, path, curveFunc] = useMemo(
    () => getPath(curveWidth, curveHeight),
    [curveWidth, curveHeight]
  );

  const [planeWidth, setPlaneWidth] = useState(33);
  const [planeHeight, setPlaneHeight] = useState(33);

  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => {
    const endIndex = Math.floor(progress.value * points.length);
    const pathData = points
      .slice(0, endIndex)
      .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
      .join(' ');

    return {
      d: pathData
    };
  });

  const planeStyle = useAnimatedStyle(() => {
    const current = curveWidth * progress.value;
    const translateX = -newOrigin[0] + current - planeWidth / 2;
    const translateY =
      -newOrigin[1] + curveFunc(current - curveWidth / 2) - planeHeight / 2;
    const alpha = Math.atan(2 * slope * (current - curveWidth / 2));
    return {
      transform: [{ translateX }, { translateY }, { rotate: `${alpha}rad` }]
    };
  }, [planeWidth, planeHeight, curveWidth, curveHeight, slope]);

  useEffect(() => {
    progress.value = withDelay(
      1000,
      withTiming(
        1,
        {
          duration: 1500,
          easing: Easing.inOut(Easing.quad)
        },
        (isFinished) => {
          if (isFinished)
            runOnJS(navigation.reset)({
              index: 0,
              routes: [{ name: ROUTES.ONBOARDING as keyof RootStackParamList }]
            });
        }
      )
    );
  }, [planeWidth, planeHeight, curveWidth, curveHeight, slope]);

  return (
    <View style={styles.container}>
      <Svg
        width={curveWidth + Math.abs(2 * newOrigin[0])}
        height={curveHeight + Math.abs(2 * newOrigin[1])}
        viewBox={`${newOrigin[0]} ${newOrigin[1]} ${
          curveWidth + Math.abs(2 * newOrigin[0])
        } ${curveHeight + Math.abs(2 * newOrigin[1])}`}
      >
        <Path
          d={path}
          fill="transparent"
          stroke={Colors.white}
          strokeWidth="3"
          opacity={0.5}
        />
        <AnimatedPath
          animatedProps={animatedProps}
          stroke={Colors.white}
          strokeWidth="3"
          fill="transparent"
        />
        <Animated.View
          style={[styles.plane, planeStyle]}
          onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            setPlaneWidth(width);
            setPlaneHeight(height);
          }}
        >
          <PlaneSvg />
        </Animated.View>
      </Svg>
      <View
        style={[
          styles.small_circle,
          {
            left: points[0].x + Math.abs(newOrigin[0]) - 15,
            top: points[0].y + Math.abs(newOrigin[1]) - 4
          }
        ]}
      >
        <SmallCircle />
      </View>
      <View
        style={[
          styles.small_circle,
          {
            right: points[0].x + Math.abs(newOrigin[0]) - 15,
            top: points[0].y + Math.abs(newOrigin[1]) - 4
          }
        ]}
      >
        <SmallCircle />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  plane: {
    position: 'absolute'
  },
  small_circle: {
    position: 'absolute'
  }
});
