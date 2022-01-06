import React, { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../contexts/AuthUserProvider';
import { useAdminsQuery, useCreateUsersMutation, User, useUsersQuery } from '../generated/graphql';
import { setAdmin, setUser } from '../redux/actions';
import { RootState } from '../redux/reducers';

interface Props {

}

const LoginForm = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    const { signin, signout, authUser } = useAuth();
    const { data, loading } = useUsersQuery();
    const { data: adminData, loading: adminLoading } = useAdminsQuery();
    const [CreateUser] = useCreateUsersMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        const loadUser = async () => {
            if (!loading && data && data.users && authUser) {
                const user = data.users.find((user) => user.uid === authUser.uid);
                alert(user?.uid + "\n" + authUser.uid);
                if (user) {
                    dispatch(setUser(user as User));

                    if (!adminLoading) {
                        adminData?.admins.forEach((admin) => {
                            if (admin.uid === user.uid)
                                dispatch(setAdmin(true));
                            else {
                                dispatch(setAdmin(false));
                            }
                        })
                    }
                } else if (!user) {
                    await CreateUser({
                        variables: {
                            input: {
                                uid: authUser.uid,
                                name: authUser.name,
                                phonenumber: authUser.phonenumber,
                                email: authUser.email,
                                profilePicture: authUser.profilePicture
                            }

                        }
                    })
                }
            }
        }
        loadUser();
    }, [authUser])

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        await signin();
    }

    const handleLogout = async (e: FormEvent) => {
        e.preventDefault();
        await signout();
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
