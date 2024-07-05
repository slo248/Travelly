import { yupResolver } from '@hookform/resolvers/yup';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { bookingSchema } from '~/constants/schemas/booking';
import Flights from '~/screens/Booking/Flights';
import Filter from '~/screens/Booking/Filter';
import HomeBooking from '~/screens/Booking/HomeBooking';
import TransportBooking from '~/screens/Booking/TransportBooking';
import { FlightsProvider } from '~/contexts/FlightsContext';
import { View } from 'react-native';
import { rH } from '~/styles/responsive';
import SelectSeats from '~/screens/Booking/SelectSeats';
import BoardingPass from '~/screens/Booking/BoardingPass';

export type BookingStackParamList = {
  HomeBooking: undefined;
  TransportBooking: undefined;
  Flights: undefined;
  Filter: undefined;
  SelectSeats: undefined;
  BoardingPass: undefined;
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
          routes: [{ name: 'TransportBooking' }]
        });
      };
    }, [])
  );

  // useEffect(() => {
  //   const hideTabBar = navigation.addListener('focus', () => {
  //     navigation.setOptions({ tabBarStyle: { display: 'none' } });
  //   });

  //   const showTabBar = navigation.addListener('blur', () => {
  //     navigation.setOptions({ tabBarStyle: { display: 'flex' } });
  //   });

  //   return () => {
  //     hideTabBar();
  //     showTabBar();
  //   };
  // }, [navigation]);

  return (
    <View style={{ flex: 1, marginBottom: rH(12) }}>
      <FlightsProvider>
        <FormProvider {...methods}>
          <Stack.Navigator
            initialRouteName="TransportBooking"
            screenOptions={{
              animation: 'slide_from_right',
              headerShown: false
            }}
          >
            <Stack.Screen
              name="TransportBooking"
              component={TransportBooking}
            />
            <Stack.Screen name="Flights" component={Flights} />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen name="SelectSeats" component={SelectSeats} />
            <Stack.Screen name="BoardingPass" component={BoardingPass} />
          </Stack.Navigator>
        </FormProvider>
      </FlightsProvider>
    </View>
  );
};

export default BookingStack;
