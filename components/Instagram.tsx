import Instafeed from 'instafeed.js';
import React, { useEffect } from 'react';

interface Props {

}


const Instagram = (props: Props) => {
    const userFeed = new Instafeed({
        get: "user",
        target: "instafeed-container",
        resolution: "low_resolution",
        limit: 15,
        filter: ((image: any) => {
            return image.tags.indexOf("JEMMAstables") >= 0;
        }),
        template: '<img alt="{{caption}}" src="{{image}}" style="padding: 4px; width: 100%; height: 400px; object-fit: cover;"/>',
        accessToken: process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN
    });

    useEffect(() => {
        userFeed.run();
        return;
    }, []);

    return (
        <div id="instafeed-container" className="grid grid-cols-4 relative w-full mr-2">

        </div>
    )
}

export default Instagram
