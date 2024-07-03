import { yupResolver } from '@hookform/resolvers/yup';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { bookingSchema } from '~/constants/schemas/booking';
import Flights from '~/screens/Booking/Flights';
import Filter from '~/screens/Booking/Filter';
import HomeBooking from '~/screens/Booking/HomeBooking';
import TransportBooking from '~/screens/Booking/TransportBooking';

export type BookingStackParamList = {
  HomeBooking: undefined;
  TransportBooking: undefined;
  Flights: undefined;
  Filter: undefined;
};

const Stack = createNativeStackNavigator<BookingStackParamList>();

const BookingStack = () => {
  const navigation = useNavigation<NavigationProp<BookingStackParamList>>();
  const methods = useForm({ resolver: yupResolver(bookingSchema) });
  useFocusEffect(
    useCallback(() => {
      // console.log('Booking focused');
      return () => {
        // console.log('Booking unfocused');
        methods.reset();
        navigation.reset({
          index: 0,
          routes: [{ name: 'Flights' }]
        });
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
        <Stack.Screen name="Flights" component={Flights} />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
    </FormProvider>
  );
};

export default BookingStack;
