import { LocationType } from '~/data/transports';

export const getNameCountry = ({ id, name }: LocationType) => `${name} (${id})`;
