import { StyleSheet, Text, View } from 'react-native';
import { rH } from '~/styles/responsive';
import { Texts } from '~/styles/texts';

export default function Header() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={[Texts.h1, { marginTop: rH(96) }]}>Welcome back!</Text>
      <Text style={[Texts.h3, { marginTop: rH(8) }]}>
        Sign in and let's get going
      </Text>
    </View>
  );
}
