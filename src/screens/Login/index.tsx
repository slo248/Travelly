import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, useCallback } from 'react';
import { LoginProps, RootStackParamList } from '~/navigation/types';
import Chevron from '~/assets/icons/Chevron';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { rH, rW } from '~/styles/responsive';
import Header from './Header';
import LoginForm from './LoginForm';
import { globalStyles } from '~/styles/globalStyles';
import Actions from './Actions';
import Separator from './Separator';
import Socials from './Socials';

const Login: FC<LoginProps> = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const rollback = useCallback(() => {
    if (navigation.canGoBack()) navigation.goBack();
    else navigation.navigate('Welcome');
  }, [navigation]);

  const onSubmit = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  return (
    <View style={globalStyles.container}>
      <Pressable onPress={rollback}>
        <View style={styles.goBackBtn}>
          <Chevron />
        </View>
      </Pressable>
      <Header />
      <View style={styles.form}>
        <LoginForm {...{ onSubmit }} />
      </View>
      <View style={styles.actions}>
        <Actions />
      </View>
      <View style={styles.separator}>
        <Separator />
      </View>
      <View style={styles.socials}>
        <Socials />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goBackBtn: {
    position: 'absolute',
    width: rW(19),
    top: rH(23)
  },
  form: {
    marginTop: rH(48)
  },
  actions: {
    marginTop: rH(16)
  },
  separator: {
    marginTop: rH(50),
    left: -rW(16)
  },
  socials: {
    marginTop: rH(24)
  }
});

export default Login;
