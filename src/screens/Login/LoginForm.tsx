import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';
import { ButtonText } from '~/components/Button';
import FormInputController from '~/components/controllers/FormInputController';

import { loginSchema } from '~/constants/schemas/login';
import { Colors } from '~/styles/colors';
import { Fonts } from '~/styles/fonts';
import { globalStyles } from '~/styles/globalStyles';
import { rH, rMS, rW } from '~/styles/responsive';
import { UserFieldValues } from '~/types/UserFieldValues';

export type LoginFormProps = {
  onSubmit?: (user: UserFieldValues) => void;
};

const LoginForm: FC<LoginFormProps> = ({
  onSubmit = (user: UserFieldValues) => Alert.alert(JSON.stringify(user))
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<UserFieldValues>({ resolver: yupResolver(loginSchema) });

  return (
    <View style={(globalStyles.container, { flex: 0, rowGap: rH(32) })}>
      <View style={styles.inputs}>
        <View style={styles.input}>
          <FormInputController
            control={control}
            name="email"
            placeholder="Email"
            errors={errors}
            others={{
              style: {
                fontSize: rMS(16),
                fontFamily: Fonts.regular
              }
            }}
          />
        </View>
        <View style={styles.input}>
          <FormInputController
            control={control}
            name="password"
            placeholder="Password"
            others={{
              secureTextEntry: true,
              style: {
                fontSize: rMS(16),
                fontFamily: Fonts.regular
              }
            }}
            errors={errors}
          />
        </View>
      </View>
      <View style={styles.submitBtn}>
        <ButtonText title="Sign In" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    rowGap: rH(25)
  },
  input: {
    height: rH(54),
    borderRadius: 15,
    backgroundColor: Colors.white,
    paddingHorizontal: rW(16),
    fontSize: rMS(16),
    justifyContent: 'center'
  },
  submitBtn: {
    height: rH(60)
  }
});

export default LoginForm;
