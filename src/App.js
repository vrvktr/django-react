import React from 'react'
import LoginContainer from './containers/login.container';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const App = () => {

  const router=createBrowserRouter(routes)
    return <RouterProvider router={router} />;
}

export default App