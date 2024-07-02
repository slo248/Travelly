import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { rH, rW } from '~/styles/responsive';
import ButtonIcon from '~/components/Button/ButtonIcon';
import FacebookIcon from '~/assets/icons/FacebookIcon';
import GoogleIcon from '~/assets/icons/GoogleIcon';
import AppleIcon from '~/assets/icons/AppleIcon';

export default function Socials() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <ButtonIcon padding={14} reverseStyle Icon={FacebookIcon} />
      </View>
      <View style={styles.button}>
        <ButtonIcon padding={14} reverseStyle Icon={GoogleIcon} />
      </View>
      <View style={styles.button}>
        <ButtonIcon padding={14} reverseStyle Icon={AppleIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: rW(16)
  },
  button: {
    width: rW(60),
    height: rH(60)
  }
});
