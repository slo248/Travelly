import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { rH, rW } from '~/styles/responsive';
import Departure from './Departure';
import Arrival from './Arrival';
import Actions from './Actions';
import { ButtonText } from '~/components/Button';
import Price from './Price';

const Filter = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <View style={globalStyles.container}>
        <CustomHeader title="Filter" />
        <Departure />
        <View style={{ marginTop: rH(16) }}>
          <Arrival />
        </View>
        <View style={{ marginTop: rH(16) }}>
          <Price />
        </View>
        <View style={styles.container}>
          <View style={styles.button}>
            <ButtonText
              title="Reset"
              reverseStyle
              borderRadius={20}
              onPress={() => methods.reset()}
            />
          </View>
          <View style={styles.button}>
            <ButtonText
              title="Done"
              borderRadius={20}
              onPress={() => console.log(methods.getValues())}
            />
          </View>
        </View>
      </View>
    </FormProvider>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    flexDirection: 'row',
    columnGap: rW(16)
  },
  button: {
    flex: 1,
    height: rH(60)
  }
});
