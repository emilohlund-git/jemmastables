import React from 'react'
import { useSelector } from 'react-redux'
import { Facility, useFacilitiesQuery } from '../../generated/graphql'
import { RootState } from '../../redux/reducers'
import Spinner from '../Spinner'
import AddFacilityBanner from './AddFacilityBanner'
import FacilityBanner from './FacilityBanner'

interface Props {

}

const Facilities = (props: Props) => {
    const { data, loading } = useFacilitiesQuery();
    const admin: boolean = useSelector((state: RootState) => state.admin);

    return (
        <div className="flex flex-col justify-center items-center">
            {!loading || data! ?
                data?.facilities.map((facility, index) => {
                    return (<FacilityBanner facility={facility as Facility} key={index} />)
                })
                :
                <Spinner />
            }
            {admin &&
                <AddFacilityBanner />
            }
        </div>
    )
}

export default Facilities
