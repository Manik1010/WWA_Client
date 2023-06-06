import { createBrowserRouter } from "react-router-dom";
import Home from "../componements/Home/Home";
import Main from "../Layout/Main"
import Deshboard from "../Layout/Deshboard";
import AdminDeshboard from "../componements/Deshboard/AdminDeshboard/AdminDeshboard";

import Instructors from "../componements/Instructors/Instructors";
import Classes from "../componements/Classes/Classes";
import Login from "../componements/Users/Login";
import AddItem from "../componements/Deshboard/AdminDeshboard/AddItem/AddItem";
import ManageItem from "../componements/Deshboard/AdminDeshboard/ManageItem/ManageItem";
import AllUsers from "../componements/Deshboard/AdminDeshboard/AllUsers/AllUsers";
// import SignUp from "../componements/Users/SignUp";


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
            {
                path: 'login',
                element: <Login></Login>
            },
            // {
            //     path: 'registation',
            //     element: <SignUp></SignUp>
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
                element: <AllUsers></AllUsers>
            }

        ]
    },
]);