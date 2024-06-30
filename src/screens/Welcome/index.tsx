import { Alert, StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';

import Logo from '~/assets/svgs/Logo';
import { Colors } from '~/styles/colors';
import { rH, rW } from '~/styles/responsive';
import { Texts } from '~/styles/texts';
import { ButtonText } from '~/components/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '~/navigators/RootStack';

const Welcome = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[Texts.h2, styles.text]}>Welcome to</Text>
        <View style={styles.logo}>
          <Logo color={Colors.primary} />
        </View>
      </View>
      <View style={styles.actions}>
        <View style={styles.btn}>
          <ButtonText title="Sign Up" />
        </View>
        <View style={styles.btn}>
          <ButtonText
            reverseStyle
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: rW(16)
  },
  logo: {
    width: rW(136)
  },
  header: {
    marginTop: rH(120),
    alignItems: 'center'
  },
  text: {
    color: Colors.primary
  },
  actions: {
    marginTop: rH(120),
    rowGap: rH(16)
  },
  btn: {
    height: rH(60)
  }
});

export default Welcome;
