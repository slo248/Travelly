import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BookingStackParamList } from '~/navigators/BookingStack';
import HeaderBooking from '../../components/CustomHeader';

const headerTitle = 'Transport Booking';

const TransportBooking = () => {
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();

  return (
    <View>
      <HeaderBooking title={headerTitle} />
      <Text>TransportBooking</Text>
    </View>
  );
};

export default TransportBooking;

const styles = StyleSheet.create({});
