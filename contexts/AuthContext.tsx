import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useCreateUsersMutation, User } from '../generated/graphql';
import { setAdmin } from '../redux/actions';
import { auth } from '../utils/firebase/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }: any) {
    const [CreateUser] = useCreateUsersMutation();
    const [currentUser, setCurrentUser] = useState();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    async function signup(user: User) {
        await CreateUser({
            variables: {
                input: {
                    name: user.name,
                    phonenumber: user.phonenumber,
                    email: user.email,
                    password: user.password
                }
            }
        })
        return createUserWithEmailAndPassword(auth, user.email, user.password);
    }

    function signin(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            if (user) {
                if (user.email === "emil@emilohlund.se") {
                    dispatch(setAdmin(true));
                } else {
                    dispatch(setAdmin(false));
                }
            }
            setCurrentUser(user)
            setLoading(false)
        });
        return unsubscribe;
    }, [])

    let sharedState = {
        currentUser,
        signup,
        signin,
        signout
    };

    return (
        <AuthContext.Provider value={sharedState as any}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}
