import HomeIcon from '~/assets/icons/HomeIcon';
import BookingIcon from '~/assets/icons/BookingIcon';
import NotiIcon from '~/assets/icons/NotiIcon';
import AccountIcon from '~/assets/icons/AccountIcon';

import Home from '~/screens/Home';
import Notification from '~/screens/Notification';
import BookingStack from './BookingStack';
import AccountStack from './AccountStack';
import HomeBooking from '~/screens/Booking/HomeBooking';
import { TabType } from '~/types/TabType';

export const Tabs: TabType[] = [
  {
    label: 'Home',
    icon: HomeIcon,
    component: Home,
    children: [] // Add an empty array for the 'children' property
  },
  {
    label: 'Booking',
    icon: BookingIcon,
    component: HomeBooking,
    children: []
  },
  {
    label: 'Notification',
    icon: NotiIcon,
    component: Notification,
    children: [] // Add an empty array for the 'children' property
  },
  {
    label: 'Account',
    icon: AccountIcon,
    component: AccountStack,
    children: [] // Add an empty array for the 'children' property
  }
];
