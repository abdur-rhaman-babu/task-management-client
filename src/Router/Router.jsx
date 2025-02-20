import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Main from "../components/Main/Main";
import AddTask from "../page/AddTask/AddTask";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import MainAuth from "../Auth/MainAuth/MainAuth";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/add-task',
                element:<AddTask/>
            }
        ]
    },
    {
        path:'auth',
        element:<MainAuth/>,
        children:[
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            },
        ]
    }
])