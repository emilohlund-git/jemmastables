import React from 'react'
import LoginForm from '../components/LoginForm'
import { withApollo } from '../utils/withApollo'

interface Props {

}

const login = (props: Props) => {
    return (
        <LoginForm />
    )
}

export default withApollo({ ssr: true })(login)
