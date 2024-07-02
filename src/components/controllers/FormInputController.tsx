import { StyleSheet, TextInput, TextInputProps, Text } from 'react-native';
import { FC, useState } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path
} from 'react-hook-form';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Texts } from '~/styles/texts';
import { rH, rMS, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';

interface FormInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  errors?: FieldErrors<T>;
  name: keyof T;
  placeholder: string;
  textInputProps?: TextInputProps;
  focused?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

const FormInputController = <T extends FieldValues>({
  control,
  errors,
  name,
  placeholder,
  textInputProps,
  onFocus,
  onBlur,
  focused = false
}: FormInputControllerProps<T>) => {
  return (
    <>
      <Controller
        {...{ control, name: name as Path<T> }}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            {...textInputProps}
            {...{
              placeholder,
              onChangeText: onChange,
              value,
              onFocus,
              onBlur
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
  error: {
    ...Texts.error,
    position: 'absolute',
    marginTop: rMS(4),
    bottom: rH(-20)
  }
});

export default FormInputController;
