import React from 'react'

interface Props {

}

const InformationPill = ({ textColor, backgroundColor, children }: any) => {
    return (
        <span className={`inline-flex items-center justify-center px-2 py-1 ml-4 text-xs font-bold leading-none ${textColor} ${backgroundColor} rounded-full`}>
            {children}
        </span>
    )
}

export default InformationPill
