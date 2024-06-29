import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';

import Button, { ButtonProps } from './Button';
import { Colors } from '~/styles/colors';
import { rMS } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';

interface ButtonTextProps extends ButtonProps {
  title: string;
}

const ButtonText: FC<ButtonTextProps> = ({
  title,
  backgroundColor = Colors.secondary,
  color = Colors.white,
  reverseStyle,
  ...props
}) => (
  <Button {...props} {...{ backgroundColor, color, reverseStyle }}>
    <Text
      style={[
        styles.title,
        {
          color: reverseStyle ? backgroundColor : color
        }
      ]}
    >
      {title}
    </Text>
  </Button>
);

const styles = StyleSheet.create({
  title: {
    fontSize: rMS(18),
    fontFamily: Fonts.bold
  }
});

export default ButtonText;
