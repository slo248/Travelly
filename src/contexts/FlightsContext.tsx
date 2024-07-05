import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { FlightType } from '~/data/flights';
import { user } from '~/data/user';
import { SortBy, SortBys } from '~/types/Filters';
import { UserType } from '~/types/UserType';
import { getDateFromHM, TimeRanges, TimeRangeType } from '~/utils/dates';

// Step 1: Define the initial state type and the reducer function
type StateType = {
  originalFlights: FlightType[];
  flights: FlightType[];
  filters: [
    {
      name: 'departure';
      options: TimeRangeType[];
    },
    {
      name: 'arrival';
      options: TimeRangeType[];
    },
    {
      name: 'lowerPrice';
      options: [number];
    },
    {
      name: 'upperPrice';
      options: [number];
    },
    {
      name: 'sortby';
      options: SortBy[];
    }
  ];
};

type ActionType = {
  type: 'RESET' | 'SET_FLIGHTS';
  payload?: any;
};

const initialState: StateType = {
  originalFlights: [],
  flights: [],
  filters: [
    {
      name: 'departure',
      options: [TimeRanges[0], TimeRanges[2]]
    },
    {
      name: 'arrival',
      options: [TimeRanges[1], TimeRanges[3]]
    },
    {
      name: 'lowerPrice',
      options: [25]
    },
    {
      name: 'upperPrice',
      options: [250]
    },
    {
      name: 'sortby',
      options: [SortBy.price, SortBy.lowestFare]
    }
  ]
};

function doFilter(flights: FlightType[], filters: StateType['filters']) {
  console.log('Filter before:', flights.length);
  const departures = filters.find((f) => f.name === 'departure')?.options;
  if (departures === undefined) throw new Error('departure filter not found');
  const lowerPrice = filters.find((f) => f.name === 'lowerPrice')?.options[0];
  if (lowerPrice === undefined) throw new Error('lowerPrice filter not found');
  const upperPrice = filters.find((f) => f.name === 'upperPrice')?.options[0];
  if (upperPrice === undefined) throw new Error('upperPrice filter not found');
  const sortBy = filters.find((f) => f.name === 'sortby')?.options;
  if (sortBy === undefined) throw new Error('sortby filter not found');

  const result = flights
    .filter((flight) =>
      departures.some(({ from, to }) => {
        const departureDateFrom = getDateFromHM(from);
        const left =
          departureDateFrom.getHours() * 60 + departureDateFrom.getMinutes();

        const departureDateTo = getDateFromHM(to);
        const right =
          departureDateTo.getHours() * 60 + departureDateTo.getMinutes();

        const x =
          flight.departureDate.getHours() * 60 +
          flight.departureDate.getMinutes();

        return left <= x && x <= right;
      })
    )
    .filter(
      (flight) => lowerPrice <= flight.price && flight.price <= upperPrice
    );

  if (sortBy.find((s) => s === SortBy.departureDate)) {
    result.sort(
      (a, b) => a.departureDate.getTime() - b.departureDate.getTime()
    );
  }

  if (sortBy.find((s) => s === SortBy.price)) {
    result.sort((a, b) => a.price - b.price);
  }

  console.log('Filter after:', result.length);
  return result;
}

function reducer(state: StateType, action: ActionType): StateType {
  // console.log('auth reducer: ', action.type, action.payload);
  let newState = null;
  switch (action.type) {
    case 'RESET':
      console.log('RESET');
      newState = { ...initialState };
      break;
    case 'SET_FLIGHTS':
      console.log('SET_FLIGHTS', action.payload?.length);
      newState = {
        originalFlights: action.payload,
        flights: action.payload,
        filters: state.filters
      };
      break;
    default:
      newState = { ...state };
  }
  newState.flights = doFilter(newState.originalFlights, newState.filters);
  return newState;
}

const FlightsContext = createContext<[StateType, Dispatch<ActionType>]>([
  initialState,
  () => null
]);

export const FlightsProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FlightsContext.Provider value={[state, dispatch]}>
      {children}
    </FlightsContext.Provider>
  );
};

export const useFlights = () => useContext(FlightsContext);
