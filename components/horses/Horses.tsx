import React from 'react';
import { useSelector } from 'react-redux';
import { Horse, useHorsesQuery } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import Spinner from '../Spinner';
import AddHorseBanner from './AddHorseBanner';
import HorseBanner from './HorseBanner';

interface Props {

}

const Horses = (props: Props) => {
    const admin: boolean = useSelector((state: RootState) => state.admin);
    const category: string = useSelector((state: RootState) => state.category);
    const { data, loading } = useHorsesQuery({
        variables: {
            where: {
                category: {
                    category: category
                }
            }
        }
    });

    return (
        <div className="flex flex-col justify-center items-center">
            {!loading || data! ?
                data?.horses.map((horse, index) => {
                    return (<HorseBanner horse={horse as Horse} key={index} />)
                })
                :
                <Spinner />
            }
            {admin &&
                <AddHorseBanner />
            }
        </div>
    )
}

export default Horses
