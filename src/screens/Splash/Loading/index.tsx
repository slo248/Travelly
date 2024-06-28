import { StyleSheet, Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useMemo } from 'react';

import { getPoints, getPath } from './curve';
import { Colors } from '~/styles/colors';
import { rH, rW } from '~/styles/responsive';

import PlaneSvg from '~/assets/svgs/plane.svg';

export default function Loading() {
  const curveWidth = rW(278.43);
  const curveHeight = rH(23.8);
  const points = useMemo(
    () => getPoints(curveWidth, curveHeight),
    [curveWidth, curveHeight]
  );
  const path = useMemo(() => getPath(points), [points]);

  return (
    <View style={styles.container}>
      <Svg width={curveWidth} height={curveHeight}>
        <Path d={path} fill="none" stroke={Colors.white} strokeWidth="2" />
      </Svg>
      <PlaneSvg />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
