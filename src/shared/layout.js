import React from 'react'
import { Outlet } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Header from './header/header';

const Layout = () => {
    const history = createBrowserHistory()
    return (
        <div className=''>
            <Header
                history={history}
                avatar={"Foo Baar"}
            />
            <div className='py-1'>
                <Outlet />
            </div>
        </div>

    )
}

export default Layout