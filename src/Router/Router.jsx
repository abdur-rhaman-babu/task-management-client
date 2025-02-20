import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Main from "../components/Main/Main";
import AddTask from "../page/AddTask/AddTask";

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
    }
])