import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/header';

const Layout = () => {
    return (
        <div className=''>
            <Header avatar={"Foo Baar"} />
            <div className='py-1'>
                <Outlet />
            </div>
        </div>

    )
}

export default Layout