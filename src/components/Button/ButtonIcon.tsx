import { FC, JSXElementConstructor, ReactElement } from 'react';

import Button, { ButtonProps } from './Button';
import { Colors } from '~/styles/colors';
import { SvgProps } from 'react-native-svg';
import { View } from 'react-native';

interface ButtonIconProps extends ButtonProps {
  Icon: React.ComponentType<SvgProps>;
}

const ButtonIcon: FC<ButtonIconProps> = ({
  Icon,
  backgroundColor = Colors.secondary,
  color = Colors.white,
  reverseStyle,
  ...props
}) => (
  <Button {...props} {...{ backgroundColor, color, reverseStyle }}>
    <Icon color={reverseStyle ? backgroundColor : color} />
  </Button>
);

export default ButtonIcon;
