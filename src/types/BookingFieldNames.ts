export enum TransportFieldName {
  locationFrom = 'locationFrom',
  locationTo = 'locationTo',
  departureDate = 'departureDate',
  returnDate = 'returnDate',
  adults = 'adults',
  children = 'children',
  pets = 'pets',
  luggageWeight = 'luggageWeight',
  class = 'class',
  transport = 'transport'
}

export const TransportFieldNames = Object.values(TransportFieldName);
