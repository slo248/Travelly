import React, { useState } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path
} from 'react-hook-form';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '~/styles/globalStyles';
import { toDateString1 } from '~/utils/toDateString';

interface FormDateTimeControllerProps<T extends FieldValues> {
  control: Control<T>;
  errors?: FieldErrors<T>;
  name: keyof T;
  mode?: 'date' | 'time';
  title: string;
}

const FormDateTimeController = <T extends FieldValues>({
  control,
  errors,
  name,
  mode = 'date',
  title
}: FormDateTimeControllerProps<T>) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Controller
        control={control}
        name={name as Path<T>}
        render={({ field: { onChange, value } }) => (
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
                  onChange(selectedDate || value);
                }}
              />
            )}
          </TouchableOpacity>
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
    color: 'red'
    // Add other styling for error message as needed
  }
});

export default FormDateTimeController;
