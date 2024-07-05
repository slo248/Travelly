export enum SortBy {
  arrivalDate = 'Arrival time',
  departureDate = 'Departure time',
  price = 'Price',
  lowestFare = 'Lowest fare',
  duration = 'Duration'
}

export const SortBys: string[] = Object.values(SortBy);
