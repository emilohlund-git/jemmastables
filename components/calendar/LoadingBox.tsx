import React from 'react'

interface Props {

}

const LoadingBox = (props: Props) => {
    return (
        <div className="cursor-pointer transition-all bg-gray-100 dark:bg-gray-700 transform hover:scale-110 motion-reduce:transform-none hover:bg-gray-50 h-16 md:h-28 rounded-md relative overflow-hidden">
            <div className="mt-0 px-2">

            </div>
        </div>
    )
}

export default LoadingBox
