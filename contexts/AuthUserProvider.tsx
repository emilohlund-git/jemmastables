import { createContext, useContext } from 'react';
import useFirebaseAuth from '../utils/firebase/useFirebaseAuth';

const authUserContext = createContext({
  authUser: null as FormattedUser | null,
  loading: true,
  signin: async () => {},
  signout: async () => {}
});

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
