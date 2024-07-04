import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { FlightType } from '~/data/flights';
import { user } from '~/data/user';
import { UserType } from '~/types/UserType';

// Step 1: Define the initial state type and the reducer function
type StateType = {
  originalFlights: FlightType[];
  flights: FlightType[];
};

type ActionType = {
  type:
    | 'SET_FLIGHTS'
    | 'FILTER_BY_DATE'
    | 'SORT_BY_PRICE'
    | 'SORT_BY_DURATION'
    | 'SORT_BY_FARES'
    | 'SORT_BY_ARRIVAL_TIME'
    | 'SORT_BY_DEPARTURE_TIME';
  payload?: any;
};

const initialState: StateType = {
  originalFlights: [],
  flights: []
};

function reducer(state: StateType, action: ActionType): StateType {
  // console.log('auth reducer: ', action.type, action.payload);
  switch (action.type) {
    case 'SET_FLIGHTS':
      console.log('SET_FLIGHTS', action.payload);
      return {
        originalFlights: action.payload,
        flights: action.payload
      };
    case 'FILTER_BY_DATE':
      console.log('FILTER_BY_DATE', action.payload.toDateString());
      return {
        ...state,
        flights: state.originalFlights.filter(
          (flight) =>
            flight.departureDate.toDateString() ===
            action.payload.toDateString()
        )
      };
    default:
      return state;
  }
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
