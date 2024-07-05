import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import HeaderBooking from '../../../components/CustomHeader';
import FromTo from './FromTo';
import { globalStyles } from '~/styles/globalStyles';
import DepartureReturn from './DepartureReturn';
import { rH, rMS, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import FormRadioController from '~/components/controllers/FormRadioController';
import { useFormContext } from 'react-hook-form';
import { Class, Transport, Transports } from '~/data/transports';
import { ButtonIcon, ButtonText } from '~/components/Button';
import ShipIcon from '~/assets/icons/ShipIcon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';
import CustomHeader from '~/components/CustomHeader';
import PassengerLuggage from './PassengerLuggage';

import { TransportFieldNames } from '~/types/BookingFieldNames';
import { useFlights } from '~/contexts/FlightsContext';
import { getFlights } from '~/data/flights';

const headerTitle = 'Transport Booking';

const TransportBooking = () => {
  const { control, handleSubmit } = useFormContext();
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();

  const [_, dispatch] = useFlights();

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={headerTitle} />
      <ScrollView style={{ flex: 1, marginBottom: rH(12) }}>
        <FromTo />
        <View style={{ marginTop: rH(16) }}>
          <DepartureReturn />
        </View>
        <View style={{ marginTop: rH(32) }}>
          <PassengerLuggage />
        </View>
        <View style={{ marginTop: rH(32) }}>
          <Text style={styles.heading}>Class</Text>
          <FormRadioController
            control={control}
            name="class"
            horizontal
            data={Object.values(Class)}
            renderItem={({ item, index, state, onChange, style }) => (
              <View key={index} style={[style, { width: 100, height: 50 }]}>
                <ButtonText
                  title={item}
                  reverseStyle={state}
                  backgroundColor={Colors.white}
                  color={Colors.green500}
                  onPress={() => onChange(item)}
                  textStyle={globalStyles.textOptionForm}
                />
              </View>
            )}
          />
        </View>
        <View style={{ marginTop: rH(32), paddingBottom: rH(16) }}>
          <Text style={styles.heading}>Transport</Text>
          <FormRadioController
            control={control}
            name="transport"
            horizontal
            data={Transports.map((transport) => transport.name)}
            renderItem={({ item, index, state, onChange, style }) => (
              <View key={index} style={[style, { width: 50, height: 50 }]}>
                <ButtonIcon
                  Icon={
                    Transports.filter((transport) => transport.name === item)[0]
                      .icon
                  }
                  padding={9}
                  reverseStyle={state}
                  backgroundColor={Colors.white}
                  color={Colors.green500}
                  onPress={() => onChange(item)}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
      <View style={{ height: rH(60), marginTop: 'auto' }}>
        <ButtonText
          borderRadius={20}
          title="Search"
          onPress={handleSubmit((data) => {
            console.log(JSON.stringify(data));
            dispatch({ type: 'RESET', payload: [] });
            navigation.navigate('Flights');
          })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: rMS(14),
    fontFamily: Fonts.semiBold,
    color: Colors.placeholder,
    marginBottom: rH(8)
  },
  searchButton: {}
});

export default TransportBooking;
