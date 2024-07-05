import { FlightType } from '~/data/flights';
import { LocationType } from '~/data/transports';

export const getNameCountry = ({ id, name }: LocationType) => `${name} (${id})`;

export const generateRandomCode = (): string => {
  const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Generate a random letter from A-Z
  const numbers = Math.floor(Math.random() * 1e12)
    .toString()
    .padStart(12, '0'); // Generate a 12-digit random number, padded with zeros if necessary
  return letter + numbers;
};
