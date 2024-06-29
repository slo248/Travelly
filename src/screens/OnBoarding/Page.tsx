import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageSourcePropType,
  useWindowDimensions
} from 'react-native';
import React from 'react';
import { rH, rW } from '~/styles/responsive';
import Button from '~/comps/Button';
import { Texts } from '~/styles/texts';
import Animated, {
  interpolate,
  useAnimatedStyle,
  SharedValue,
  Extrapolation
} from 'react-native-reanimated';

interface PageProps {
  index: number;
  description: string;
  buttonTitle: string;
  image: ImageSourcePropType;
  scrollX: SharedValue<number>;
  onNext: () => void;
}

const Page: React.FC<PageProps> = ({
  index,
  description,
  buttonTitle,
  image,
  scrollX,
  onNext
}) => {
  const { width } = useWindowDimensions();

  const rS = useAnimatedStyle(() => {
    const inputRange = [
      width * (index - 1),
      width * index,
      width * (index + 1)
    ];
    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [-100, 0, 100],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY }]
    };
  }, [width, scrollX]);

  return (
    <View style={[{ width }, styles.container]}>
      <Image style={styles.image} source={image} />
      <Animated.View style={rS}>
        <Text style={[Texts.h3, styles.desc]}>{description}</Text>
      </Animated.View>
      <View style={styles.button}>
        <Button title={buttonTitle} onPress={onNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rH(24),
    paddingBottom: rH(48),
    paddingHorizontal: rW(16)
  },
  image: {
    marginTop: rH(80),
    width: '100%',
    height: rH(304),
    resizeMode: 'contain'
  },
  button: {
    width: '100%',
    height: rH(60),
    marginTop: 'auto'
  },
  desc: {
    marginTop: rH(32),
    textAlign: 'center',
    width: rW(242),
    marginHorizontal: 'auto'
  }
});

export default Page;
