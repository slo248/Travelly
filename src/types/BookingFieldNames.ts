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
  transport = 'transport',
  chosenSeats = 'chosenSeats'
}

export const TransportFieldNames = Object.values(TransportFieldName);
