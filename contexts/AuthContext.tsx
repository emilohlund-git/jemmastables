import { createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, signOut, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useCreateUsersMutation, User, useUsersQuery } from '../generated/graphql';
import { setAdmin, setUser } from '../redux/actions';
import { auth } from '../utils/firebase/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }: any) {
    const [CreateUser] = useCreateUsersMutation();
    const [currentUser, setCurrentUser] = useState();
    const provider = new FacebookAuthProvider();
    const dispatch = useDispatch();
    const { data, loading } = useUsersQuery();
    const [isLoading, setIsLoading] = useState(true);

    function signin() {
        return signInWithRedirect(auth, provider);
    }

    function signout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (facebookUser: any) => {
            if (!loading && facebookUser) {
             
                const user = data?.users.find((user) => user.uid === facebookUser.uid);

                if (user) {
                    dispatch(setUser(user as User));
                }

                if (!user) {
                    await CreateUser({
                        variables: {
                            input: {
                                uid: facebookUser.uid,
                                name: facebookUser.displayName,
                                phonenumber: facebookUser.providerData[0].phoneNumber,
                                email: facebookUser.email,
                                profilePicture: facebookUser.photoURL + "/?type=normal",
                            }
                        }
                    })
                }

                if (facebookUser.email === "emilohlund@hotmail.com") {
                    dispatch(setAdmin(true));
                } else {
                    dispatch(setAdmin(false));
                }

                setCurrentUser(facebookUser)
            }
            setIsLoading(false)
        });

        return unsubscribe;
    }, [loading])

    let sharedState = {
        currentUser,
        signin,
        signout
    };

    return (
        <AuthContext.Provider value={sharedState as any}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}
