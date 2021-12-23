import React from 'react'
import Horses from '../components/Horses'
import { withApollo } from '../utils/withApollo'

interface Props {

}

const hästar = (props: Props) => {
    return (
        <div>
            <Horses />
        </div>
    )
}

export default hästar
