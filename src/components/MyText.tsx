import { StyleSheet, Text, TextProps, TextStyle, View } from 'react-native';
import React, { FC } from 'react';
import { Fonts } from '~/styles/fonts';
import { rMS } from '~/styles/responsive';
import { Colors } from '~/styles/colors';

const MyText: FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text
      style={{
        fontFamily: Fonts.regular,
        fontSize: rMS(14),
        color: Colors.tertiary
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default MyText;
