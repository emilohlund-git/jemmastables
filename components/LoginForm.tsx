import router, { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../contexts/AuthContext';
import { User, useUsersQuery } from '../generated/graphql';
import { setUser } from '../redux/actions';
import { RootState } from '../redux/reducers';

interface Props {

}

const LoginForm = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    const rouer = useRouter();
    const { signin, signout }: any = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })
    const dispatch = useDispatch();
    const { data, loading } = useUsersQuery();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        if (!loading) {
            try {
                setError('');
                await signin(formState.email, formState.password);
                setIsLoading(true);
                dispatch(setUser(data?.users.find((u) => u.email.toLowerCase() === formState.email.toLowerCase())));
                router.back();
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
            await signout();
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
                        <form onSubmit={handleLogin} className="flex flex-col">
                            <input className="text-fill-gray-500 text-gray-500 shadow-sm transition-all outline-none bg-blue-50 appearance-none rounded-3xl px-4 py-2 mb-2 focus:ring-2 focus:ring-blue-400" value={formState.email} onChange={(e) => setFormState({
                                ...formState,
                                [e.target.name]: e.target.value
                            })} name="email" type="email" placeholder="email" />
                            <input className="text-fill-gray-500 text-gray-500 shadow-sm transition-all outline-none bg-blue-50 appearance-none rounded-3xl px-4 py-2 mb-2 focus:ring-2 focus:ring-blue-400" value={formState.password} onChange={(e) => setFormState({
                                ...formState,
                                [e.target.name]: e.target.value
                            })} name="password" type="password" placeholder="password" />
                            <div className={`${error === '' ? "hidden" : ""} text-fill-gray-500 text-gray-500 shadow-sm transition-all outline-none bg-red-100 appearance-none rounded-3xl px-4 py-3 mb-2 text-sm`}>
                                {error}
                            </div>
                            <button disabled={isLoading} className="shadow-sm bg-gradient-to-r from-black to-gray-800 text-white rounded-3xl py-2 text-sm" type="submit">logga in &rarr;</button>
                        </form>
                        :
                        <form onSubmit={handleLogout} className="flex flex-col">
                            <button className="shadow-sm bg-gradient-to-r from-black to-gray-800 w-48 text-white rounded-3xl px-4 py-2 text-sm">logga ut &rarr;</button>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginForm
