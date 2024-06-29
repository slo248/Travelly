import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Texts } from '~/styles/texts';
import { FeatureNotImplemented } from '~/constants';

interface ActionsProps {
  onSingUp?: () => void;
  onForgotPassword?: () => void;
}

export default function Actions({
  onSingUp = () => Alert.alert(FeatureNotImplemented),
  onForgotPassword = () => Alert.alert(FeatureNotImplemented)
}: ActionsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={Texts.p}>New?</Text>
        <Pressable onPress={onSingUp}>
          <Text style={[Texts.h3, { color: '#01635D' }]}> Sign Up</Text>
        </Pressable>
      </View>

      <Pressable onPress={onForgotPassword}>
        <Text style={Texts.h3}>Forgot password?</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    columnGap: 4
  }
});
