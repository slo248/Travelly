import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '~/styles/colors';
import { ButtonOnPressNoAction } from '~/constants';

export interface ButtonProps {
  onPress?: () => void;
  reverseStyle?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onPress = () => Alert.alert(ButtonOnPressNoAction),
  reverseStyle = false,
  children
}) => {
  return (
    <TouchableOpacity
      {...{ onPress }}
      style={[styles.container, reverseStyle && styles.rContainer]}
      activeOpacity={0.5}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 20
  },
  rContainer: {
    backgroundColor: Colors.white
  }
});

export default Button;
