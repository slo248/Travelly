import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '~/styles/colors';
import { rMS } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';

interface ButtonProps {
  title: string;
  onPress: () => void;
  reverseStyle?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  reverseStyle = false
}) => {
  return (
    <TouchableOpacity
      {...{ onPress }}
      style={[styles.container, reverseStyle && styles.rContainer]}
      activeOpacity={0.5}
    >
      <Text style={[styles.title, reverseStyle && styles.rTitle]}>{title}</Text>
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
  },
  title: {
    color: Colors.white,
    fontSize: rMS(18),
    fontFamily: Fonts.bold
  },
  rTitle: {
    color: Colors.secondary
  }
});

export default Button;
