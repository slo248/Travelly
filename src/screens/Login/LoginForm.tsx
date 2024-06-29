import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { FormSubmitNoAction } from '~/constants';
import { globalStyles } from '~/styles/globalStyles';

export type LoginFormProps = {
  onSubmit?: () => void;
};

const LoginForm: FC<LoginFormProps> = ({
  onSubmit = () => Alert.alert(FormSubmitNoAction)
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <View style={(globalStyles.container, { flex: 0 })}>
      <Text>LoginForm</Text>
    </View>
  );
};

export default LoginForm;
