import React from 'react';
import { HorseCategory, useHorseCategoriesQuery } from '../../generated/graphql';
import Spinner from '../Spinner';
import HorseCategoryBanner from './HorseCategoryBanner';

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
