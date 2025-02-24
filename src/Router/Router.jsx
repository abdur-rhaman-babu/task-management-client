import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Main from "../components/Main/Main";
import AddTask from "../page/AddTask/AddTask";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import MainAuth from "../Auth/MainAuth/MainAuth";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateTask from "../components/UpdateTask/UpdateTask";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<PrivateRoute><Main/></PrivateRoute>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/add-task',
                element:<AddTask/>
            },
            {
                path:'/update/:id',
                element:<UpdateTask/>,
                loader: ({params})=>fetch(`https://task-management-server-pi-navy.vercel.app/task/${params.id}`)
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