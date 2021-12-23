import React, { FormEvent, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import '../utils/firebase/initApp';
import { User, useUsersQuery } from '../generated/graphql';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/actions';
import { RootState } from '../redux/reducers';

interface Props {

}

const LoginForm = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })

    const { data, loading } = useUsersQuery();
    const dispatch = useDispatch();

    const auth = getAuth();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, formState.email, formState.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch(setUser(data!.users.find(u => u.email === user.email)));
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
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
                        <form onSubmit={handleLogin} className="flex flex-col">
                            <input className="shadow-sm transition-all outline-none bg-blue-50 appearance-none rounded-3xl px-4 py-2 mb-2 focus:ring-2 focus:ring-blue-400" value={formState.email} onChange={(e) => setFormState({
                                ...formState,
                                [e.target.name]: e.target.value
                            })} name="email" type="email" placeholder="email" />
                            <input className="shadow-sm transition-all outline-none bg-blue-50 appearance-none rounded-3xl px-4 py-2 mb-2 focus:ring-2 focus:ring-blue-400" value={formState.password} onChange={(e) => setFormState({
                                ...formState,
                                [e.target.name]: e.target.value
                            })} name="password" type="password" placeholder="password" />
                            <button className="shadow-sm bg-blue-400 text-white rounded-3xl py-2 text-sm" type="submit">Logga in</button>
                        </form>
                        :
                        <form onSubmit={handleLogout} className="flex flex-col">
                            <button className="shadow-sm bg-blue-400 w-48 text-white rounded-3xl px-4 py-2 text-sm">Logga ut</button>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginForm
