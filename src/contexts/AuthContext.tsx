import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { user } from '~/data/user';
import { UserType } from '~/types/UserType';

// Step 1: Define the initial state type and the reducer function
type StateType = {
  isAuthenticated: boolean;
  user: null | UserType;
};

type ActionType = {
  type: 'LOGIN' | 'LOGOUT' | 'UPDATE_USER';
  payload?: any;
};

const initialState: StateType = {
  isAuthenticated: true,
  user: user
};

function reducer(state: StateType, action: ActionType): StateType {
  console.log('auth reducer: ', action.type, action.payload);
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...user, ...action.payload }
      };
    default:
      return state;
  }
}

const AuthContext = createContext<[StateType, Dispatch<ActionType>]>([
  initialState,
  () => null
]);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
