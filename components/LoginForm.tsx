import { FacebookAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';
import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAdminsQuery, useCreateUsersMutation, User, useUsersQuery } from '../generated/graphql';
import { setAdmin, setUser } from '../redux/actions';
import { RootState } from '../redux/reducers';
import { auth } from '../utils/firebase/firebase';

interface Props {

}

const LoginForm = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const provider = new FacebookAuthProvider();
    const dispatch = useDispatch();

    const [CreateUser] = useCreateUsersMutation();
    const { data, loading } = useUsersQuery();
    const { data: AdminData, loading: AdminLoading } = useAdminsQuery();

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
                                profilePicture: facebookUser.photoURL + "/?type=large",
                            }
                        }
                    })
                }

                if (!AdminLoading) {
                    AdminData?.admins.forEach((admin) => {
                        if (facebookUser.uid === admin.uid)
                            dispatch(setAdmin(true));
                        else {
                            dispatch(setAdmin(false));
                        }
                    })
                }
            }
            setIsLoading(false)
        });

        return unsubscribe;
    }, [loading])

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        if (!isLoading) {
            try {
                setError('');
                await signInWithRedirect(auth, provider);
            } catch (err) {
                console.log(err);
                setError("Inloggningen misslyckades.");
            }
            setIsLoading(false);
        }
    }

    const handleLogout = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setError('');
            await signOut(auth);
            setIsLoading(true);
            dispatch(setUser(null));
        } catch (err) {
            console.log(err);
            setError('Utloggningen misslyckades');
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col bg-white pb-20">
            <div className="flex flex-col self-center z-20 w-full px-2 md:w-8/12 pb-4 md:pb-20">
                <div className="flex flex-col md:flex-col">
                    <div className="mb-2 mt-4">
                        <h1 className="text-black text-xl pl-2 md:text-4xl md:text-center"></h1>
                    </div>
                    <div className="flex justify-around md:justify-center items-center md:gap-0 mb-4 md:m-2">
                        <div className="w-full h-12 flex justify-center items-center">
                            <h1 className="text-black font-bold md:font-normal text-2xl text-center">{!user ? "logga in" : "hejpådig"}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {!user ?
                        <button onClick={handleLogin} className="shadow-sm bg-gradient-to-r from-blue-500 to-blue-800 w-48 text-white rounded-3xl px-4 py-2 text-sm">logga in med Facebook</button>
                        :
                        <button onClick={handleLogout} className="shadow-sm bg-gradient-to-r from-black to-gray-800 w-48 text-white rounded-3xl px-4 py-2 text-sm">logga ut &rarr;</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginForm
