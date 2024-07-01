import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';
import HeaderBooking from '../../components/CustomHeader';
import FormRadioController from '~/components/controllers/FormRadioController';
import { useFormContext } from 'react-hook-form';
import { ButtonText } from '~/components/Button';

const headerTitle = 'Transport Booking';

const TransportBooking = () => {
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();
  const { control } = useFormContext();

  return (
    <View>
      <HeaderBooking title={headerTitle} />
      <Text>TransportBooking</Text>
      <View>
        <FormRadioController
          control={control}
          name="transport"
          data={['Hello', 'World']}
          renderItem={({ item, index, state, onChange }) => {
            return (
              <View key={index} style={{ width: 100, height: 50 }}>
                <ButtonText
                  reverseStyle={state}
                  title={item}
                  onPress={() => onChange(item)}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default TransportBooking;

const styles = StyleSheet.create({});
