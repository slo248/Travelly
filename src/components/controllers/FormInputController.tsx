import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
  View
} from 'react-native';
import { FC, useState } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  PathValue,
  useController
} from 'react-hook-form';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Texts } from '~/styles/texts';
import { rH, rMS, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';

interface FormInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: keyof T;
  placeholder?: string;
  textInputProps?: TextInputProps;
  focused?: boolean;
  defaultValue?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const FormInputController = <T extends FieldValues>({
  control,
  name,
  placeholder,
  textInputProps,
  defaultValue,
  onFocus,
  onBlur,
  focused = false
}: FormInputControllerProps<T>) => {
  const {
    field: { onChange, value },
    formState: { errors }
  } = useController({
    control,
    name: name as Path<T>,
    defaultValue: defaultValue as PathValue<T, Path<T>>
  });
  const { style, ...others } = textInputProps;
  return (
    <View>
      <TextInput
        style={{
          padding: 0,
          fontFamily: Fonts.regular,
          ...style
        }}
        {...others}
        {...{
          placeholder,
          onChangeText: onChange,
          value,
          onFocus,
          onBlur
        }}
      />
      {errors && errors[name] && (
        <Text style={styles.error}>{String(errors[name]?.message)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    ...Texts.error
  }
});

export default FormInputController;
