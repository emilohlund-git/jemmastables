import { useEffect, useState } from 'react';
import { auth } from './firebase';
import {
  FacebookAuthProvider,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { User } from '../../generated/graphql';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { setAdmin, setUser } from '../../redux/actions';

const formatAuthUser = (user: FacebookUser) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  phonenumber: user.providerData[0].phoneNumber,
  profilePicture: user.photoURL + '/?type=large',
  timeslots: null,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null as FormattedUser | null);
  const [loading, setLoading] = useState(true);
  const provider = new FacebookAuthProvider();
  const dispatch = useDispatch();

  const clear = () => {
    setAuthUser(null);
    dispatch(setAdmin(false));
    dispatch(setUser(null));
    setLoading(true);
  };

  const authStateChanged = async (facebookUser: any) => {
    if (!facebookUser) {
      clear();
      return;
    }

    setLoading(true);
    var formattedUser = formatAuthUser(facebookUser);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const signin = async () => {
    await signInWithRedirect(auth, provider);
  };

  const signout = async () => {
    await signOut(auth)
      .then(() => {
        clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signin,
    signout,
  };
}
