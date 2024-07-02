import { createContext } from 'react';

import { user } from '~/data/user';

export const AuthContext = createContext({
  signIn: () => {},
  signOut: () => {},
  user
});
