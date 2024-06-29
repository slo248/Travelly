import { FC } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated';
import { Colors } from '~/styles/colors';

interface BarProps {
  index: number;
  width: number;
  scrollX: SharedValue<number>;
}

const Bar: FC<BarProps> = ({ index, width, scrollX }) => {
  const rS = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [width * (index - 1), width * index, width * (index + 1)],
      [0.3, 1, 0.3],
      Extrapolation.CLAMP
    );
    return {
      opacity
    };
  }, [width, scrollX]);
  return <Animated.View style={[styles.bar, rS]} />;
};

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.paginatorActive,
    borderRadius: 999
  }
});

export default Bar;
