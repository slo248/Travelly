import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import HeaderBooking from '../../components/CustomHeader';
import FromTo from './FromTo';
import { globalStyles } from '~/styles/globalStyles';

const headerTitle = 'Transport Booking';

const TransportBooking = () => {
  return (
    <View style={globalStyles.container}>
      <HeaderBooking title={headerTitle} />
      <FromTo />
    </View>
  );
};

export default TransportBooking;
