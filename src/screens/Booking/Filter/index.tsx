import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '~/styles/globalStyles';
import CustomHeader from '~/components/CustomHeader';
import { FormProvider, useForm } from 'react-hook-form';
import { rH, rW } from '~/styles/responsive';
import Departure from './Departure';
import Arrival from './Arrival';

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
      </View>
    </FormProvider>
  );
};

export default Filter;
