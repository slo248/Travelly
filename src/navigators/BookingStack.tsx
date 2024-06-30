import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import Chevron from '~/assets/icons/Chevron';
import HomeBooking from '~/screens/Booking/HomeBooking';
import TransportBooking from '~/screens/Booking/TransportBooking';
import { Colors } from '~/styles/colors';
import { Fonts } from '~/styles/fonts';
import { rMS } from '~/styles/responsive';

export type BookingStackParamList = {
  HomeBooking: undefined;
  TransportBooking: undefined;
};

const Stack = createNativeStackNavigator<BookingStackParamList>();

const BookingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeBooking"
      screenOptions={{
        animation: 'slide_from_right',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: Fonts.semiBold,
          fontSize: rMS(18),
          color: Colors.tertiary
        }
      }}
    >
      <Stack.Screen name="HomeBooking" component={HomeBooking} />
      <Stack.Screen name="TransportBooking" component={TransportBooking} />
    </Stack.Navigator>
  );
};

export default BookingStack;
