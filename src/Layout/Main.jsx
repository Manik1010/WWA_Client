import { Outlet } from "react-router-dom";
import Footer from "../componements/Share/Footer";
import Navbar from "../componements/Share/Navbar";

const Main = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;