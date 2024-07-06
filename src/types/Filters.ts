export enum SortBy {
  arrivalDate = 'Arrival time',
  departureDate = 'Departure time',
  price = 'Price',
  lowestFare = 'Lowest fare',
  duration = 'Duration'
}

export const SortBys: string[] = Object.values(SortBy);

export enum FilterType {
  departure = 'Departure',
  arrival = 'Arrival',
  lowerPrice = 'Lower price',
  upperPrice = 'Upper price',
  sortby = 'Sort by'
}
