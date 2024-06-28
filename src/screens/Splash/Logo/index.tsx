import { useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSpring
} from 'react-native-reanimated';
import LogoSvg from '~/assets/svgs/logo.svg'; // Ensure your SVG is compatible with React Native

const windowWidth = Dimensions.get('window').width;
const logoSize = windowWidth * 0.5; // Example: logo size is 50% of screen width

export default function AnimatedLogo() {
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
        <LogoSvg />
      </Animated.View>
    </View>
  );
}
