import React from 'react'
import navButtons from '../config/buttons'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
    children: any
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar navButtons={navButtons} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
