import React, { useEffect, useState } from 'react'
import Instafeed from 'instafeed.js';

interface Props {

}


const Instagram = (props: Props) => {
    const [insta, setInsta] = useState([]);

    const userFeed = new Instafeed({
        get: "user",
        target: "instafeed-container",
        resolution: "low_resolution",
        limit: 15,
        filter: ((image: any) => {
            return image.tags.indexOf("JEMMAstables") >= 0;
        }),
        template: '<img alt="{{caption}}" src="{{image}}" style="padding: 4px; width: 100%; height: 400px; object-fit: cover;"/>',
        accessToken: "IGQVJXZAE81cEluTTd6WGdTelpmU0gzdHhaYUdhS1FIbXoyQVREaXE3WnV3SU03aFFtek1nVUc4RnpnZAUxrVlNRZAS1VSjloNkJiTk1sbF93bjZAIMXp6NmZAJLWhyTWFGcjBsdTFJMkdDbFp4QVpMMlB3SAZDZD"
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
