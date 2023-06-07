import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUsers, FaUtensils } from "react-icons/fa";

// import logo from '../../../public/logo.jpeg';
import logo from '../../public/logo.jpeg'
const Deshboard = () => {
    // TODO... 
    const userStatus = "Admin";
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay">
                </label>

                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <div className="">
                        <img className="ml-20 rounded-full w-2/5" src={logo}></img>
                    </div>
                    <h1 className="text-4xl font-bold text-center p-6">Deshboard</h1>
                    {/* Sidebar content here */}
                    {(() => {
                        if (userStatus === "Admin") {
                            return (
                                <>
                                    <li><NavLink to="/dashboard/adminDashboard"><FaHome></FaHome> Admin Home</NavLink></li>
                                    <li><NavLink to="/dashboard/manageItem"><FaWallet></FaWallet> Manage Couses</NavLink></li>
                                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                                </>
                            );
                        } else if (userStatus === "Instructor") {
                            return (
                                <>
                                    <li><NavLink to="/dashboard/instructorDashboard"><FaHome></FaHome> Instructor Home</NavLink></li>
                                    <li><NavLink to="/dashboard/addCourse"><FaUtensils></FaUtensils> Add Course</NavLink></li>
                                    <li><NavLink to="/dashboard/myCourses"><FaHome></FaHome> My Courses</NavLink></li>

                                </>
                            );
                        } else {
                            return (
                                <>
                                    <li><NavLink to="/dashboard/userDashboard"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/selectedCourse"><FaUtensils></FaUtensils> Selected Course</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolledCourse"><FaHome></FaHome> Enrolled Course</NavLink></li>
                                </>
                            );
                        }
                    })()}

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/class'>Courses</NavLink></li>
                    <li><NavLink to='/class'>LogOut</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Deshboard;