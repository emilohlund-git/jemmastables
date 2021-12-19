import React from 'react'
import LoginForm from '../../components/LoginForm'

interface Props {

}

const login = (props: Props) => {
    return (
        <div className="flex w-full flex-col pb-20">
            <LoginForm />
        </div>
    )
}

export default login
