import React from 'react'
import Facilities from '../../components/facilities/Facilities'
import { withApollo } from '../../utils/withApollo'

interface Props {

}

const index = (props: Props) => {
    return (
        <Facilities />
    )
}

export default withApollo({ ssr: true })(index)
