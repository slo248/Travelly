import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, StyleSheet, View } from 'react-native';
import { ButtonText } from '~/components/Button';
import FormInputController from '~/components/controllers/FormInputController';

import { FormSubmitNoAction } from '~/constants';
import { loginSchema } from '~/constants/schemas/login';
import { globalStyles } from '~/styles/globalStyles';
import { rH } from '~/styles/responsive';
import { User } from '~/types/User';

export type LoginFormProps = {
  onSubmit?: (user: User) => void;
};

const LoginForm: FC<LoginFormProps> = ({
  onSubmit = (user: User) => Alert.alert(JSON.stringify(user))
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <View style={(globalStyles.container, { flex: 0, rowGap: rH(32) })}>
      <View style={styles.inputs}>
        <View style={styles.input}>
          <FormInputController
            control={control}
            name="email"
            placeholder="Email"
            errors={errors}
          />
        </View>
        <View style={styles.input}>
          <FormInputController
            control={control}
            name="password"
            placeholder="Password"
            others={{
              secureTextEntry: true
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
    height: rH(54)
  },
  submitBtn: {
    height: rH(60)
  }
});

export default LoginForm;
