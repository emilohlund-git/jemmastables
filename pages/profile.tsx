import { LineProgressBar } from '@frogress/line';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileContent from '../components/profile/ProfileContent';
import { User } from '../generated/graphql';
import { RootState } from '../redux/reducers';
import { RouteGuard } from '../utils/RouteGuard';

interface Props {

}


const User = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    return (
        <div>
            <RouteGuard>
                {user ?
                    <>
                        <div className="flex justify-center text-center flex-col mt-4 mx-6">
                            <h1 className="font-bold text-xl">{user.name.toLowerCase()}</h1>
                            <p className="text-sm">{user.email}</p>
                            <LineProgressBar
                                className="mt-4"
                                progressColor="linear-gradient(to right, #00ffab, #00fee3, #00dd99)"
                                label={(value: number) => <p className="mt-1 ml-4 text-white font-semibold absolute">{value}%</p>}
                                percent={52}
                                rounded={36}
                                height={36}
                            />
                        </div>
                        <div className="bg-white rounded-t-2xl">
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

