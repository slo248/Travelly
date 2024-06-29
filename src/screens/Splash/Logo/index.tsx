import { useEffect } from 'react';
import { View, Dimensions, useWindowDimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSpring
} from 'react-native-reanimated';
import Logo from '~/assets/svgs/Logo';

export default function AnimatedLogo() {
  const { width } = useWindowDimensions();
  const logoSize = width * 0.4;

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);
  const duration = 1000;

  // Animated styles
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          scale: scale.value
        }
      ]
    };
  });

  // Start the animation
  useEffect(() => {
    opacity.value = withSpring(1, { duration });
    scale.value = withSpring(1, { duration });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          {
            width: logoSize,
            height: logoSize
          },
          animatedStyles
        ]}
      >
        <Logo />
      </Animated.View>
    </View>
  );
}
