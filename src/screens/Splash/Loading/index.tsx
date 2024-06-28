import React, { useEffect, useMemo, useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useAnimatedProps,
  withRepeat
} from 'react-native-reanimated';

import { getPath } from './curve';
import { Colors } from '~/styles/colors';
import { rH, rW } from '~/styles/responsive';

import PlaneSvg from '~/assets/svgs/plane.svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function Loading() {
  const curveWidth = rW(278.43);
  const curveHeight = rH(23.8);

  const newOrigin = useRef([-30, -30]).current;

  const [slope, points, path, curveFunc] = useMemo(
    () => getPath(curveWidth, curveHeight),
    [curveWidth, curveHeight]
  );

  const [planeWidth, setPlaneWidth] = useState(0);
  const [planeHeight, setPlaneHeight] = useState(0);

  // Animated value for the progress along the path
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

  // Animated style for the plane
  const planeStyle = useAnimatedStyle(() => {
    const current = curveWidth * progress.value;
    const translateX = -newOrigin[0] + current - planeWidth / 2;
    const translateY =
      -newOrigin[1] + curveFunc(current - curveWidth / 2) - planeHeight / 2;
    const alpha = Math.atan(2 * slope * (current - curveWidth / 2));
    return {
      transform: [{ translateX }, { translateY }, { rotate: `${alpha}rad` }]
    };
  }, [planeWidth]);

  // Start the animation when the component mounts
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1500 }), -1, true);
  }, []);

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
