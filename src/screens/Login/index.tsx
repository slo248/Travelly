import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, useCallback } from 'react';
import { LoginProps, RootStackParamList } from '~/navigation/types';
import Chevron from '~/assets/icons/Chevron';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { rH, rW } from '~/styles/responsive';
import Header from './Header';

const Login: FC<LoginProps> = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const rollback = useCallback(() => {
    if (navigation.canGoBack()) navigation.goBack();
    else navigation.navigate('Welcome');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Pressable onPress={rollback}>
        <View style={styles.goBackBtn}>
          <Chevron />
        </View>
      </Pressable>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1
  },
  goBackBtn: {
    position: 'absolute',
    width: rW(19),
    left: rW(11),
    top: rH(23)
  }
});

export default Login;
