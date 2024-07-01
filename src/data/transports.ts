import { FC } from 'react';

import CarIcon from '~/assets/icons/CarIcon';
import PlaneIcon from '~/assets/icons/PlaneIcon';
import ShipIcon from '~/assets/icons/ShipIcon';
import TrainIcon from '~/assets/icons/TrainIcon';
import { SvgProps } from '~/types/SvgProps';

export type Class = 'Economy' | 'Business';

export type Transport = 'Flight' | 'Ship' | 'Train' | 'Car';

export interface LocationType {
  id: string;
  name: string;
}

export interface TransportType {
  name: Transport;
  icon: FC<SvgProps>;
}

export const Locations: LocationType[] = [
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

export const Transports: TransportType[] = [
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
