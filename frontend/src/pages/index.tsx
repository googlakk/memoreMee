import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Anzan } from "./Anzan/Anzan";
import Dashboard from "./MainPage/Dashboard";
import { FC } from "react";
import LoginPage from "./LoginPage/LoginPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LoginPage/>,
        },
        {
            path:"/main",
            element: <Dashboard/>
        },
        
        {
            path:"/anzan",
            element: <Anzan/>
        }
    ]
)

const Routing:FC = () => {
    return <RouterProvider router={router}/>
}
export default Routing;