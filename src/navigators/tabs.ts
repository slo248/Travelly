import HomeIcon from '~/assets/icons/HomeIcon';
import BookingIcon from '~/assets/icons/BookingIcon';
import NotiIcon from '~/assets/icons/NotiIcon';
import AccountIcon from '~/assets/icons/AccountIcon';

import Home from '~/screens/Home';
import Notification from '~/screens/Notification';
import BookingStack from './BookingStack';
import AccountStack from './AccountStack';

export const Tabs = [
  {
    route: 'Home',
    icon: HomeIcon,
    component: Home
  },
  {
    route: 'Booking',
    icon: BookingIcon,
    component: BookingStack
  },
  {
    route: 'Notification',
    icon: NotiIcon,
    component: Notification
  },
  {
    route: 'Account',
    icon: AccountIcon,
    component: AccountStack
  }
];
