import React from 'react'

interface Props {

}

const EmptyTimeSlot = (props: Props) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center ml-4">
                <div className={`w-2 h-16 bg-white rounded-md`}>
                </div>
                <div className="h-16 w-24 rounded-md items-center py-3 pl-4 text-white">
                    <p className="font-bold">inga tider</p>
                    <p className="text-xs">tomt idag</p>
                </div>
            </div>
            <div className="m-4 py-2 h-20 text-white">
                <p className="text-sm mb-3 text-gray-400 text-right flex justify-end">synd</p>
                <div className="flex  justify-end gap-2">
                    <p>så kan det gå!</p>
                </div>
            </div>
        </div>
    )
}

export default EmptyTimeSlot
