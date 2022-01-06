import React, { FC, ReactElement, useState } from 'react'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx';

const JemmaImage: FC<ImageProps> = ({ className, onLoad, ...props }): ReactElement => {
    const [isImageReady, setIsImageReady] = useState(false);
    const onLoadCallBack = (e: any) => {
        setIsImageReady(true);
        typeof onLoad === "function" && onLoad(e);
    }
    return (<>
        <div className={clsx([`relative h-52 filter ${!isImageReady && "blur-sm opacity-0"} transition-all duration-400`, { "blur-none": isImageReady }, className])}>
            <Image className={className} onLoad={onLoadCallBack} alt={props.alt} src={props.src} width={props.width} height={props.height} objectFit={props.objectFit || "cover"} layout="fill" quality={55} />
        </div>
    </>)
}

export default JemmaImage
