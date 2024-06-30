import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';

const TransportBooking = () => {
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Transport Booking'
    });
  }, []);

  return (
    <View>
      <Text>TransportBooking</Text>
    </View>
  );
};

export default TransportBooking;

const styles = StyleSheet.create({});
