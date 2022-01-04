import { signOut } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JemmaImage from '../components/JemmaImage';
import ProfileContent from '../components/profile/ProfileContent';
import { User } from '../generated/graphql';
import { setUser } from '../redux/actions';
import { RootState } from '../redux/reducers';
import { auth } from '../utils/firebase/firebase';
import { RouteGuard } from '../utils/RouteGuard';
import { withApollo } from '../utils/withApollo';

interface Props {

}


const User = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            dispatch(setUser(null));
            router.push("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <RouteGuard>
            {user ?
                <>
                    <div className="flex justify-center text-center flex-col pb-12 pt-14 px-6 bg-white">
                        <div className="w-32 h-32 self-center">
                            <JemmaImage className="rounded-full" width={200} height={200} src={user.profilePicture!} alt={user.name} />
                        </div>
                        <h1 className="font-bold text-xl text-black mt-6">{user.name.toLowerCase()}</h1>
                        <p className="text-sm text-black">{user.email}</p>
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
                    <div className="bg-white flex justify-center">
                        <ProfileContent />
                    </div></>
                :
                <></>
            }
        </RouteGuard>
    )
}

export default withApollo({ ssr: true })(User)

