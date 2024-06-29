import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';

import Button, { ButtonProps } from './Button';
import { Colors } from '~/styles/colors';
import { rMS } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';

interface ButtonTextProps extends ButtonProps {
  title: string;
}

const ButtonText: FC<ButtonTextProps> = ({ title, reverseStyle, ...props }) => (
  <Button {...props} reverseStyle={reverseStyle}>
    <Text style={[styles.title, reverseStyle && styles.rTitle]}>{title}</Text>
  </Button>
);

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: rMS(18),
    fontFamily: Fonts.bold
  },
  rTitle: {
    color: Colors.secondary
  }
});

export default ButtonText;
