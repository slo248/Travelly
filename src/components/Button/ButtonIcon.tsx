import { FC, JSXElementConstructor, ReactElement } from 'react';

import Button, { ButtonProps } from './Button';
import { Colors } from '~/styles/colors';
import { SvgProps } from 'react-native-svg';
import { View } from 'react-native';

interface ButtonIconProps extends ButtonProps {
  Icon: React.ComponentType<SvgProps>;
}

const ButtonIcon: FC<ButtonIconProps> = ({ Icon, reverseStyle, ...props }) => (
  <Button {...props} reverseStyle={reverseStyle}>
    <View style={{ padding: 16 }}>
      <Icon color={reverseStyle ? Colors.secondary : Colors.white} />
    </View>
  </Button>
);

export default ButtonIcon;
