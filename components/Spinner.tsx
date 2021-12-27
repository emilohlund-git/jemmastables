import React from 'react'

interface Props {

}

const Spinner = (props: Props) => {
    return (
        <div className="w-full flex justify-center my-10">
            <div style={{ borderTopColor: "transparent" }} className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
        </div>
    )
}

export default Spinner
