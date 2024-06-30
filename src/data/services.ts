import GlobeIcon from '~/assets/icons/GlobeIcon';
import HotelIcon from '~/assets/icons/HotelIcon';
import PlaneIcon from '~/assets/icons/PlaneIcon';
import EventIcon from '~/assets/icons/EventIcon';
import { Alert } from 'react-native';
import { FeatureNotImplemented } from '~/constants';
import { BookingStackParamList } from '~/navigators/BookingStack';

export const services = [
  {
    name: 'Trip',
    icon: GlobeIcon,
    image: require('~/assets/imgs/booking/trip.png'),
    onNextScreenName: (): keyof BookingStackParamList => {
      Alert.alert(FeatureNotImplemented);
      return 'HomeBooking';
    }
  },
  {
    name: 'Hotel',
    icon: HotelIcon,
    image: require('~/assets/imgs/booking/hotel.png'),
    onNextScreenName: (): keyof BookingStackParamList => {
      Alert.alert(FeatureNotImplemented);
      return 'HomeBooking';
    }
  },
  {
    name: 'Transport',
    icon: PlaneIcon,
    image: require('~/assets/imgs/booking/transport.png'),
    onNextScreenName: (): keyof BookingStackParamList => 'TransportBooking'
  },
  {
    name: 'Events',
    icon: EventIcon,
    image: require('~/assets/imgs/booking/events.png'),
    onNextScreenName: (): keyof BookingStackParamList => {
      Alert.alert(FeatureNotImplemented);
      return 'HomeBooking';
    }
  }
];
