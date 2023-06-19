import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useBooking from "../../../hooks/useBooking";
// import useAdmin from "../../../hooks/useAdmin";
// import useInstructor from "../../../hooks/useInstructor";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const [bookings] = useBooking();
    const navigate = useNavigate()
    // console.log(bookings);
        
    // const [isAdmin] = useAdmin();
    // const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        logOut()
            .then(() => { navigate('/login') })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/class">Coures</Link></li>
        <li><Link to="/instructor">Instructor</Link></li>
        <li><Link to="/dashboard/">Dashboard</Link></li>
        <li>
            <Link to='/dashboard/selectedCourse'>
                <button className="btn btn-xs gap-2">
                    <FaCartArrowDown></FaCartArrowDown>
                    <div className="badge badge-secondary">+{bookings?.length || 0}</div>
                </button>
            </Link>
        </li>

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case font-extrabold text-xl">WWA</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                {user &&
                    <>
                        {/* <img className='rounded-circle w-10' title={user.displayName} style={{ height: '40px' }} src={user.photoURL} alt="" /> */}
                        {/* <img className='rounded-circle w-10' src={user.photoURL} title={user.displayName} style={{ height: '40px' }} ></img> */}
                        <Link to="dashboard/profile"><img className='rounded-circle w-10' title={user.displayName} style={{ height: '40px' }} src={user.photoURL} alt="" /></Link>
                    </>
                }
                    {/* <Link to="/login" className="btn">SingIn</Link> */}

                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                        </> : <>
                            <Link to="/login" className="btn btn-active btn-ghost">Sing In</Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;