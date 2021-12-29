import React, { useRef } from 'react'

interface Props {
    image: string
}

const HorseGalleryImage = (props: Props) => {
    return (
        <div className="w-48 h-48 mr-2" style={{ backgroundImage: `url("${props.image}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>

        </div>
    )
}

export default HorseGalleryImage
