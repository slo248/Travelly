import { ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
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
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';
import SortBy from './SortBy';
import { useFlights } from '~/contexts/FlightsContext';

const Filter = () => {
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();
  const methods = useForm();
  const [{ filters }, dispatch] = useFlights();

  const onSubmit = (data) => {
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: [
        { name: 'departure', options: data.departure },
        { name: 'arrival', options: data.arrival },
        { name: 'lowerPrice', options: [data.lowerPrice] },
        { name: 'upperPrice', options: [data.upperPrice] },
        { name: 'sortby', options: data.sortby }
      ]
    });
  };

  return (
    <FormProvider {...methods}>
      <CustomHeader title="Filter" />
      <ScrollView style={[globalStyles.container, { marginBottom: rH(8) }]}>
        <Departure />
        <View style={{ marginTop: rH(16) }}>
          <Arrival />
        </View>
        <View style={{ marginTop: rH(16) }}>
          <Price />
        </View>
        <View style={{ marginTop: rH(16) }}>
          <SortBy />
        </View>
      </ScrollView>
      <View style={styles.container}>
        <View style={styles.button}>
          <ButtonText
            title="Reset"
            reverseStyle
            borderRadius={20}
            onPress={() => {
              ToastAndroid.show(
                'Press reset again if something did not reset properly.',
                ToastAndroid.SHORT
              );
              methods.reset();
            }}
          />
        </View>
        <View style={styles.button}>
          <ButtonText
            title="Done"
            borderRadius={20}
            onPress={() => {
              navigation.goBack();
              onSubmit(methods.getValues());
            }}
          />
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
    columnGap: rW(16),
    paddingHorizontal: rW(16)
  },
  button: {
    flex: 1,
    height: rH(60)
  }
});
