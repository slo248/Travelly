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

interface PageProps {
  description: string;
  buttonTitle: string;
  image: ImageSourcePropType;
  onNext: () => void;
}

const Page: React.FC<PageProps> = ({
  description,
  buttonTitle,
  image,
  onNext
}) => {
  const { width, height } = useWindowDimensions();
  console.log(description);

  return (
    <View style={[{ width, height }, styles.container]}>
      <Image style={styles.image} source={image} />
      <Text style={[Texts.h3, styles.desc]}>{description}</Text>
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
    marginTop: rH(106),
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
