import { FC } from 'react';
import AccountIcon from '~/assets/icons/AccountIcon';

import CarIcon from '~/assets/icons/CarIcon';
import ChildIcon from '~/assets/icons/ChildIcon';
import LuggageIcon from '~/assets/icons/LuggageIcon';
import PetIcon from '~/assets/icons/PetIcon';
import PlaneIcon from '~/assets/icons/PlaneIcon';
import ShipIcon from '~/assets/icons/ShipIcon';
import TrainIcon from '~/assets/icons/TrainIcon';
import { SvgProps } from '~/types/SvgProps';

export enum Class {
  Economy = 'Economy',
  Business = 'Business'
}

export enum Transport {
  Flight = 'Flight',
  Ship = 'Ship',
  Train = 'Train',
  Car = 'Car'
}

export enum TravelCompanion {
  Adults = 'adults',
  Childrens = 'children',
  Pets = 'pets',
  LuggageWeight = 'luggageWeight'
}

export interface LocationType {
  id: string;
  name: string;
}

export interface TransportType {
  name: Transport;
  icon: FC<SvgProps>;
}

export interface TravelCompanionType {
  name: TravelCompanion;
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
    name: Transport.Flight,
    icon: PlaneIcon
  },
  {
    name: Transport.Ship,
    icon: ShipIcon
  },
  {
    name: Transport.Train,
    icon: TrainIcon
  },
  {
    name: Transport.Car,
    icon: CarIcon
  }
];

export const TravelCompanions: TravelCompanionType[] = [
  {
    name: TravelCompanion.Adults,
    icon: AccountIcon
  },
  {
    name: TravelCompanion.Childrens,
    icon: ChildIcon
  },
  {
    name: TravelCompanion.Pets,
    icon: PetIcon
  },
  {
    name: TravelCompanion.LuggageWeight,
    icon: LuggageIcon
  }
];
