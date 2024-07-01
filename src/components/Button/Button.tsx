import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '~/styles/colors';
import { ButtonOnPressNoAction } from '~/constants';

export interface ButtonProps {
  onPress?: () => void;
  reverseStyle?: boolean;
  children?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  padding?: number;
}

const Button: React.FC<ButtonProps> = ({
  onPress = () => Alert.alert(ButtonOnPressNoAction),
  reverseStyle = false,
  backgroundColor,
  color,
  children,
  padding = 12
}) => {
  return (
    <TouchableOpacity
      {...{ onPress }}
      style={[
        styles.container,
        {
          backgroundColor: reverseStyle ? color : backgroundColor
        }
      ]}
      activeOpacity={0.5}
    >
      <View style={{ padding }}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  }
});

export default Button;
