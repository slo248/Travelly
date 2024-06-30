import GlobeIcon from '~/assets/icons/GlobeIcon';
import HotelIcon from '~/assets/icons/HotelIcon';
import PlaneIcon from '~/assets/icons/PlaneIcon';
import EventIcon from '~/assets/icons/EventIcon';

export const services = [
  {
    name: 'Trip',
    icon: GlobeIcon,
    image: require('~/assets/imgs/booking/trip.png')
  },
  {
    name: 'Hotel',
    icon: HotelIcon,
    image: require('~/assets/imgs/booking/hotel.png')
  },
  {
    name: 'Transport',
    icon: PlaneIcon,
    image: require('~/assets/imgs/booking/transport.png')
  },
  {
    name: 'Events',
    icon: EventIcon,
    image: require('~/assets/imgs/booking/events.png')
  }
];
