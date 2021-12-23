import React from 'react';
import { useHorseCategoriesQuery } from '../generated/graphql';
import Image from 'next/image';

interface Props {

}

const Horses = (props: Props) => {
    const { data, loading } = useHorseCategoriesQuery();

    return (
        <div className="flex flex-col pb-20 px-4 justify-center items-center">
            <div className="flex flex-col w-full justify-center items-center gap-4 m-2">
                {!loading && data ? data.horseCategories.map((category, index) =>
                    <div className="w-full relative" key={index}>
                        <Image layout="responsive" objectFit="cover" alt={"Hej"} width={410} height={500} src={"/images/dilara.png"} />
                        <div className="absolute w-full text-center -mt-14 bg-gray-50 bg-opacity-40 h-10"><p className="my-2 font-semibold">{category.category}</p></div>
                    </div>
                ) : <></>}
            </div>
        </div>
    )
}

export default Horses
