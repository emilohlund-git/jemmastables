import React from 'react'

interface Props {

}

const EmptyTimeSlot = (props: Props) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center ml-4">
                <div className={`w-2 h-16 bg-white rounded-md`}>
                </div>
                <div className="h-16 rounded-md items-center py-3 pl-2 text-white">
                    <p className="font-bold">inga tider</p>
                    <p className="text-xs">tomt idag</p>
                </div>
            </div>
            <div className="m-4 py-2 text-white">
                <p className="text-xs text-gray-400 text-right">synd</p>
                <p>så kan det gå!</p>
            </div>
        </div>
    )
}

export default EmptyTimeSlot
