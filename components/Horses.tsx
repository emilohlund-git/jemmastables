import React from 'react';
import { useHorseCategoriesQuery } from '../generated/graphql';
import Image from 'next/image';

interface Props {

}

const Horses = (props: Props) => {
    const { data, loading } = useHorseCategoriesQuery();

    return (
        <div className="flex flex-col pb-20 px-44 justify-center items-center">
            <div className="flex w-full justify-center items-center gap-4 m-2">
                {!loading && data ? data.horseCategories.map((category, index) =>
                    <div className="w-1/3 bg-gray-100 px-4 py-4" key={index}>
                        <Image alt={"Hej"} width={500} height={400} src={"/images/horse.jpg"} />
                        {category.category}
                    </div>
                ) : <></>}
            </div>
        </div>
    )
}

export default Horses
