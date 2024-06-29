import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '~/styles/colors';
import { rMS } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      {...{ onPress }}
      style={styles.container}
      activeOpacity={0.5}
    >
      <Text style={styles.title}>{title}</Text>
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
  title: {
    color: Colors.white,
    fontSize: rMS(18),
    fontFamily: Fonts.bold
  }
});

export default Button;
