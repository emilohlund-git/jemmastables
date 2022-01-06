import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Partner, useUpdatePartnerMutation } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import DeletePartnerButton from './DeletePartnerButton';

interface Props {
    partner: Partner
}

const PartnerBanner = (props: Props) => {
    const [hovering, setHovering] = useState(false);
    /* @ts-ignore */
    const profilePhoto = props.partner.logo.url;
    const admin: boolean = useSelector((state: RootState) => state.admin);

    const [formState, setFormState] = useState({
        name: props.partner.name,
        website: props.partner.website,
        description: props.partner.description,
    })

    const [UpdatePartner] = useUpdatePartnerMutation();

    const handleSubmit = async (e: any) => {
        if (e.key === "Enter") {
            toast.promise(
                UpdatePartner({
                    variables: {
                        where: {
                            id: props.partner.id
                        },
                        update: {
                            name: formState.name,
                            website: formState.website,
                            description: formState.description
                        }
                    }
                }),
                {
                    pending: 'Uppdaterar...',
                    success: 'Uppdaterad 👌',
                    error: 'Misslyckades 🤯'
                }
            )
        }
    }

    return (
        <div className={`border-t-2 border-dashed border-black border-opacity-10 p-2 flex z-20 w-full relative h-56 transition-all`} onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)} style={{ backgroundImage: `url(${profilePhoto})`, backgroundPosition: "right 5em bottom 50%", backgroundSize: "10%", backgroundRepeat: "no-repeat" }}>
            {admin &&
                <DeletePartnerButton name={props.partner.name} />
            }
            <div onKeyPress={handleSubmit} className="text-left flex flex-col ml-4 self-end mb-4 w-full max-w-3xl">
                <div className="flex items-center">
                    <p className={`text-black transform transition-all mr-2 ${!hovering ? "scale-0 -mr-4" : "scale-100"}`}>&rarr;</p>
                    <input onChange={(e) => {
                        setFormState({
                            ...formState,
                            name: e.target.value
                        })
                    }} name="partner-name" disabled={!admin} className="appearance-none bg-white bg-opacity-0 outline-none text-lg font-semibold text-black transition-all" value={formState.name} />
                </div>
                <input onChange={(e) => {
                    setFormState({
                        ...formState,
                        website: e.target.value
                    })
                }} name="partner-website" disabled={!admin} className="appearance-none bg-white bg-opacity-0 w-full outline-none font-thin text-sm text-black" value={formState.website!} />
                <textarea onChange={(e) => {
                    setFormState({
                        ...formState,
                        description: e.target.value
                    })
                }} name="partner-description" disabled={!admin} rows={4} className="w-full bg-white bg-opacity-0 outline-none resize-none flex-1 text-sm text-black" value={formState.description}></textarea>
            </div>
        </div>
    )
}

export default PartnerBanner
