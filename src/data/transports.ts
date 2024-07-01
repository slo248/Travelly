import CarIcon from '~/assets/icons/CarIcon';
import PlaneIcon from '~/assets/icons/PlaneIcon';
import ShipIcon from '~/assets/icons/ShipIcon';
import TrainIcon from '~/assets/icons/TrainIcon';

export const Locations = [
  {
    id: 'NYC',
    name: 'New York'
  },
  {
    id: 'LDN',
    name: 'London'
  },
  {
    id: 'PAR',
    name: 'Paris'
  },
  {
    id: 'MIL',
    name: 'Milan'
  },
  {
    id: 'SGN',
    name: 'Ho Chi Minh City'
  },
  {
    id: 'HAN',
    name: 'Hanoi'
  },
  {
    id: 'TPE',
    name: 'Taipei'
  },
  {
    id: 'TYO',
    name: 'Tokyo'
  }
];

export type Class = 'Economy' | 'Business';

export const TransportTypes = [
  {
    name: 'Flight',
    icon: PlaneIcon
  },
  {
    name: 'Ship',
    icon: ShipIcon
  },
  {
    name: 'Train',
    icon: TrainIcon
  },
  {
    name: 'Car',
    icon: CarIcon
  }
];
