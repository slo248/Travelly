import { LocationType } from './transports';

export type FlightType = {
  locationFrom: LocationType;
  locationTo: LocationType;
  departureDate: Date;
  price: number;
  number: string;
};

export const getRandom = (l: number, r: number): number =>
  Math.floor(Math.random() * (r - l + 1) + l);

export const getFlights = async (
  locationFrom: LocationType,
  locationTo: LocationType,
  departureDate: Date
) => {
  return new Promise<FlightType[]>((resolve) => {
    setTimeout(() => {
      const flights: FlightType[] = [];

      const generateRandomFlightsForDay = (date: Date): FlightType[] => {
        const numberOfFlights = getRandom(4, 6);
        return Array.from({ length: numberOfFlights }, (): FlightType => {
          const departureDate = new Date(date);
          const randomHour = Math.floor(Math.random() * 24); // Random hour between 0 and 23
          const randomMinute = Math.floor(Math.random() * 60); // Random minute between 0 and 59
          departureDate.setHours(randomHour, randomMinute, 0); // Set random hour and minute, seconds to 0
          return {
            locationFrom,
            locationTo,
            departureDate,
            price: getRandom(20, 100), // Random number between 300 and 700
            number: `NL-${getRandom(1, 99).toString().padStart(2, '0')}` // Random number between 100 and 999
          };
        });
      };

      // Generate flights for 3 days before, the day of, and 3 days after departure
      for (let i = -3; i <= 4; i++) {
        const date = new Date(departureDate);
        date.setDate(date.getDate() + i);
        flights.push(...generateRandomFlightsForDay(date));
      }
      resolve(flights);
    }, 3000);
  });
};

export const getDistinctDatesFromFlights = (flights: FlightType[]): Date[] => {
  const distinctDates = flights
    .map((flight) => {
      const date = new Date(flight.departureDate);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    })
    .filter((value, index, self) => self.indexOf(value) === index);

  return distinctDates.map((date) => new Date(date));
};
