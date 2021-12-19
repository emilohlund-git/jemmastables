import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAdmin } from '../redux/actions';
import { RootState } from '../redux/reducers';

interface Props {

}

const LoginForm = (props: Props) => {
    const admin: boolean = useSelector((state: RootState) => state.admin);
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        password: '',
        username: ''
    });

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formState)
        }

        const response = await fetch('http://localhost:4000/login', requestOptions);
        const data = await response.json();

        if (data.status === 200) dispatch(setAdmin(true));
    }

    const handleLogout = async (e: FormEvent) => {
        e.preventDefault();

        const requestOptions = {
            method: "GET",
        }

        const response = await fetch('http://localhost:4000/logout', requestOptions);
        const data = await response.json();

        if (data.status === 200) dispatch(setAdmin(false));
    }

    return (
        <div className="flex flex-row items-center justify-center">
            {!admin ?
                <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h4 className="mv3">
                        Logga in
                    </h4>
                    <div className="">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Användarnamn
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"
                                value={formState.username}
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        username: e.target.value
                                    })
                                }
                                placeholder="Ditt namn"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Lösenord
                            </label>
                            <input
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={formState.password}
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        password: e.target.value
                                    })
                                }
                                type="password"
                                placeholder="Ditt lösenord"
                            />
                        </div>
                    </div>
                    <div className="">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Logga in
                        </button>
                    </div>
                </form>
                :
                <div className="bg-white text-center rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="font-bold mb-4">Redan inloggad.</h1>
                    <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Logga ut
                    </button>
                </div>
            }
        </div>
    )
}

export default LoginForm
