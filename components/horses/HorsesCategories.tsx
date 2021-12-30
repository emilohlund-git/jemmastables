import React from 'react';
import { HorseCategory, useHorseCategoriesQuery } from '../../generated/graphql';
import HorseCategoryBanner from './HorseCategoryBanner';
import Spinner from '../Spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

interface Props {

}

const Horses = (props: Props) => {
    const { data, loading } = useHorseCategoriesQuery();

    return (
        <div className="flex flex-col justify-center items-center">
            {!loading && data ? data.horseCategories.map((category, index) =>
                <HorseCategoryBanner key={index} category={category as HorseCategory} />
            ) : <Spinner />}
        </div>
    )
}

export default Horses
