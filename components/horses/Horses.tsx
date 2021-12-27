import React from 'react';
import { useSelector } from 'react-redux';
import { Horse, useHorsesQuery } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import Spinner from '../Spinner';
import HorseBanner from './HorseBanner';

interface Props {

}

const Horses = (props: Props) => {
    const category: string = useSelector((state: RootState) => state.category);
    const { data, loading } = useHorsesQuery({
        variables: {
            horsesWhere: {
                category: {
                    category: category
                }
            }
        }
    });

    console.log(data);

    return (
        <div className="flex flex-col justify-center items-center">
            {!loading && data! ?
                data?.horses.map((horse, index) => {
                    return (<HorseBanner horse={horse as Horse} key={index} />)
                })
                :
                <Spinner />
            }
        </div>
    )
}

export default Horses
