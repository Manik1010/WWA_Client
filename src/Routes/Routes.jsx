import { createBrowserRouter } from "react-router-dom";
import Home from "../componements/Home/Home";
// import Login from "../componements/User/Login";
// import Registation from "../componements/User/Registation";
import Main from "../Layout/Main"
import Deshboard from "../Layout/Deshboard";
import AdminDeshboard from "../componements/Deshboard/AdminDeshboard/AdminDeshboard";
import AddItem from "../componements/Deshboard/AddItem/AddItem";
import ManageItem from "../componements/Deshboard/ManageItem/ManageItem";
import Instructors from "../componements/Instructors/Instructors";
import Classes from "../componements/Classes/Classes";
// import Registation from "../componements/User/Registation";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructor',
                element: <Instructors></Instructors>
            },
            {
                path: 'class',
                element: <Classes></Classes>
            },
            // {
            //     path: 'login',
            //     element: <Login></Login>
            // },
            // {
            //     path: 'registation',
            //     element: <Registation></Registation>
            // }
        ]
    },
    {
        path: 'dashboard',
        element: <Deshboard></Deshboard>,
        children: [

            {
                path: 'adminDashboard',
                element: <AdminDeshboard></AdminDeshboard>
            },
            {
                path: 'addItem',
                element: <AddItem></AddItem>
            },
            {
                path: 'manageItem',
                element: <ManageItem></ManageItem>
            },
            {
                path: 'allusers',
                element: <ManageItem></ManageItem>
            }

        ]
    },
]);