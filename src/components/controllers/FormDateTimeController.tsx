import React, { useState } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  PathValue,
  useController
} from 'react-hook-form';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '~/styles/globalStyles';
import { Texts } from '~/styles/texts';
import { toDateString1 } from '~/utils/dates';

interface FormDateTimeControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: keyof T;
  mode?: 'date' | 'time';
  title: string;
  defaultValue?: Date;
}

const FormDateTimeController = <T extends FieldValues>({
  control,
  name,
  mode = 'date',
  title,
  defaultValue
}: FormDateTimeControllerProps<T>) => {
  const {
    field: { value, onChange },
    formState: { errors }
  } = useController({
    control,
    name: name as Path<T>,
    defaultValue: defaultValue as PathValue<T, Path<T>>
  });

  const [show, setShow] = useState(false);

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setShow(true)}
        style={globalStyles.cardForm}
      >
        <Text style={globalStyles.headingForm}>{title}</Text>
        <Text style={globalStyles.textForm}>
          {value instanceof Date ? toDateString1(value) : 'Select Date'}
        </Text>
        {show && (
          <DateTimePicker
            mode={mode}
            display="default"
            is24Hour
            value={value instanceof Date ? value : new Date()}
            onChange={(event, selectedDate) => {
              setShow(false);
              if (event.type === 'set') onChange(selectedDate || value);
            }}
          />
        )}
      </TouchableOpacity>
      {errors && errors[name] && (
        <Text style={styles.error}>{String(errors[name]?.message)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    ...Texts.error,
    width: '100%'
  }
});

export default FormDateTimeController;
