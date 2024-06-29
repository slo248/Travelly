import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';
import { WelcomeProps } from '~/navigation/types';

import Logo from '~/assets/svgs/Logo';
import { Colors } from '~/styles/colors';
import { rH, rW } from '~/styles/responsive';
import { Texts } from '~/styles/texts';
import { ButtonText } from '~/components/Button';

const Welcome: FC<WelcomeProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[Texts.h3, styles.text]}>Welcome to</Text>
        <View style={styles.logo}>
          <Logo color={Colors.primary} />
        </View>
      </View>
      <View style={styles.actions}>
        <View style={styles.btn}>
          <ButtonText title="Sign Up" onPress={() => {}} />
        </View>
        <View style={styles.btn}>
          <ButtonText reverseStyle title="Login" onPress={() => {}} />
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
