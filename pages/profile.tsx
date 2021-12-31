import { LineProgressBar } from '@frogress/line';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileContent from '../components/profile/ProfileContent';
import { useAuth } from '../contexts/AuthContext';
import { User } from '../generated/graphql';
import { setUser } from '../redux/actions';
import { RootState } from '../redux/reducers';
import { RouteGuard } from '../utils/RouteGuard';

interface Props {

}


const User = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const { signout }: any = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signout();
            dispatch(setUser(null));
            router.push("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <RouteGuard>
                {user ?
                    <>
                        <div className="flex justify-center text-center flex-col mt-4 mx-6">
                            <h1 className="font-bold text-xl text-white mt-6">{user.name.toLowerCase()}</h1>
                            <p className="text-sm text-white">{user.email}</p>
                            <button onClick={handleLogout} className="my-6 mb-9 shadow-sm bg-gradient-to-r from-black to-gray-800 w-48 text-white self-center rounded-3xl px-4 py-2 text-sm">logga ut &rarr;</button>
                            {/* 
                            <LineProgressBar
                                className="mb-8 shadow-2xl"
                                progressColor="linear-gradient(to right, #00ffab, #00fee3, #00dd99)"
                                label={(value: number) => <p className="w-full text-xs text-white font-semibold absolute">{value}%</p>}
                                percent={52}
                                rounded={36}
                                height={14}
                            />
                            */}
                        </div>
                        <div className="bg-white rounded-t-2xl flex justify-center">
                            <ProfileContent />
                        </div></>
                    :
                    <></>
                }
            </RouteGuard>
        </div>
    )
}

export default User

