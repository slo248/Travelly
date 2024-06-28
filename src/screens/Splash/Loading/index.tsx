import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  runOnUI
} from 'react-native-reanimated';

import { getPath } from './curve';
import { Colors } from '~/styles/colors';
import { rH, rW } from '~/styles/responsive';

import PlaneSvg from '~/assets/svgs/plane.svg';

export default function Loading() {
  const curveWidth = rW(278.43);
  const curveHeight = rH(23.8);

  const [slope, path, curveFunc] = useMemo(
    () => getPath(curveWidth, curveHeight),
    [curveWidth, curveHeight]
  );

  const [planeWidth, setPlaneWidth] = useState(0);
  const [planeHeight, setPlaneHeight] = useState(0);

  // Animated value for the progress along the path
  const progress = useSharedValue(0);

  // Start the animation when the component mounts
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1500 }), -1, true);
  }, []);

  // Animated style for the plane
  const planeStyle = useAnimatedStyle(() => {
    const x = curveWidth * progress.value;
    const y = curveFunc(x - curveWidth / 2);
    const alpha = Math.atan(2 * slope * (x - curveWidth / 2));

    return {
      transform: [
        { translateX: x - planeWidth / 2 },
        { translateY: y - planeHeight / 2 },
        {
          rotate: `${alpha}rad`
        }
      ]
    };
  }, [planeWidth]);

  return (
    <View style={styles.container}>
      <Svg width={curveWidth} height={curveHeight}>
        <Path d={path} fill="none" stroke={Colors.white} strokeWidth="2" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plane: {
    position: 'absolute'
  }
});
