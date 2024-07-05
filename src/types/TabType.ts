import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { SvgProps } from 'react-native-svg';

export interface TabType extends BottomTabBarButtonProps {
  label: string;
  icon: React.ComponentType<SvgProps>;
  component: React.FC;
}
