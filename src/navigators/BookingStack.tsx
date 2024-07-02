import { useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import HomeBooking from '~/screens/Booking/HomeBooking';
import TransportBooking from '~/screens/Booking/TransportBooking';

export type BookingStackParamList = {
  HomeBooking: undefined;
  TransportBooking: undefined;
};

const Stack = createNativeStackNavigator<BookingStackParamList>();

const BookingStack = () => {
  const methods = useForm();
  useFocusEffect(
    useCallback(() => {
      console.log('Booking focused');
      return () => {
        console.log('Booking unfocused');
        methods.reset();
      };
    }, [])
  );
  return (
    <FormProvider {...methods}>
      <Stack.Navigator
        initialRouteName="HomeBooking"
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false
        }}
      >
        <Stack.Screen name="HomeBooking" component={HomeBooking} />
        <Stack.Screen name="TransportBooking" component={TransportBooking} />
      </Stack.Navigator>
    </FormProvider>
  );
};

export default BookingStack;
