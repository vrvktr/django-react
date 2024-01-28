import HomeContainer from "./containers/home.container";
import LoginContainer from "./containers/login.container";
import UserContainer from "./containers/user.container";
import ErrorRouteNotFound from "./shared/error";
import Layout from "./shared/layout";

export const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorRouteNotFound />,
        children: [
            {
                index: true,
                path: "/home",
                element: <HomeContainer />,
            },
            {
                path: "/users",
                element: <UserContainer />,
            },
            // {
            //   path: "/products",
            //   element: <Products />,
            // },
            // {
            //   path: "/users/:id",
            //   element: <User />,
            // },
            // {
            //   path: "/products/:id",
            //   element: <Product />,
            // },
        ],
    },
    {
        path: "/login",
        element: <LoginContainer />,
    },
]