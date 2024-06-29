import { StyleSheet, TextInput, TextInputProps, Text } from 'react-native';
import { FC } from 'react';
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Texts } from '~/styles/texts';
import { rH, rMS, rW } from '~/styles/responsive';
import { User } from '~/types/User';

interface FormInputControllerProps {
  control: Control<User>;
  errors?: FieldErrors<User>;
  name: keyof User;
  placeholder: string;
  others?: TextInputProps;
}

const FormInputController: FC<FormInputControllerProps> = ({
  control,
  errors,
  name,
  placeholder,
  others
}) => {
  return (
    <>
      <Controller
        {...{ control, name }}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            style={styles.input}
            {...{
              placeholder,
              onBlur,
              onChangeText: onChange,
              value,
              ...others
            }}
          />
        )}
      />
      {errors && errors[name] && (
        <Text style={styles.error}>{String(errors[name]?.message)}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: Colors.white,
    paddingHorizontal: rW(16),
    fontSize: rMS(16)
  },
  error: {
    ...Texts.error,
    position: 'absolute',
    marginTop: rMS(4),
    bottom: rH(-20)
  }
});

export default FormInputController;
