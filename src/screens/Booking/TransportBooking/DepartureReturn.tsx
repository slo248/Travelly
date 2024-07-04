import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { rW } from '~/styles/responsive';
import FormDateTimeController from '~/components/controllers/FormDateTimeController';
import { useFormContext } from 'react-hook-form';

const DepartureReturn = () => {
  const { control } = useFormContext();
  return (
    <View style={{ flexDirection: 'row', columnGap: rW(16) }}>
      <View style={{ flex: 1 }}>
        <FormDateTimeController
          control={control}
          name="departureDate"
          title="Departure"
        />
      </View>
      <View style={{ flex: 1 }}>
        <FormDateTimeController
          control={control}
          name="returnDate"
          title="Return"
        />
      </View>
    </View>
  );
};

export default DepartureReturn;
