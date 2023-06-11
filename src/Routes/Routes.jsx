import { createBrowserRouter } from "react-router-dom";
import Home from "../componements/Home/Home";
import Main from "../Layout/Main"
import Deshboard from "../Layout/Deshboard";
import AdminDeshboard from "../componements/Deshboard/AdminDeshboard/AdminDeshboard";
import Instructors from "../componements/Instructors/Instructors";
import Classes from "../componements/Classes/Classes";
import Login from "../componements/Users/Login";
import ManageItem from "../componements/Deshboard/AdminDeshboard/ManageItem/ManageItem";
import AllUsers from "../componements/Deshboard/AdminDeshboard/AllUsers/AllUsers";
import SignUp from "../componements/Users/SignUp";
import InstructorDeshboard from "../componements/Deshboard/InstructorDeshboard/InstructorDeshboard";
import AddCourse from "../componements/Deshboard/InstructorDeshboard/AddCourse";
import MyCourses from "../componements/Deshboard/InstructorDeshboard/MyCourses";
import SelectedCourse from "../componements/Deshboard/UserDeshboard/SelectedCourse/SelectedCourse";
import UserDashboard from "../componements/Deshboard/UserDeshboard/UserDashboard/UserDashboard";
import EnrolledCourse from "../componements/Deshboard/UserDeshboard/EnrolledCourse/EnrolledCourse";
import Payment from "../componements/Deshboard/UserDeshboard/Payment/Payment";
import ErrorPage from "../componements/ErrorPage/ErrorPage ";
import History from "../componements/Deshboard/UserDeshboard/Payment/History";
import Edit from "../componements/Deshboard/InstructorDeshboard/Edit";
import PrivateRoute from "../providers/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path: 'registation',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Deshboard></Deshboard></PrivateRoute>,
        children: [
            // For Admin.................................................................... 
            {
                path: 'adminDashboard',
                element: <AdminDeshboard></AdminDeshboard>
            },
            {
                path: 'manageItem',
                element: <ManageItem></ManageItem>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            },
            // For Instructor............................ .................................
            {
                path: 'instructorDashboard',
                element: <InstructorDeshboard></InstructorDeshboard>
            },
            {
                path: 'addCourse',
                element: <AddCourse></AddCourse>
            },
            {
                path: 'myCourses',
                element: <MyCourses></MyCourses>
            },
            {
                path: 'edit/:id',
                element: <Edit></Edit>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
              }
            // For User............................ ...................................
            ,
            {
                path: 'userDashboard',
                element: <UserDashboard></UserDashboard>
            }
            ,
            {
                path: 'selectedCourse',
                element: <SelectedCourse></SelectedCourse>
            }
            ,
            {
                path: 'enrolledCourse',
                element: <EnrolledCourse></EnrolledCourse>
            }
            ,
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            }
            ,
            {
                path: 'history',
                element: <History></History>
            }
        ]
    },
]);