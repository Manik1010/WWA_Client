import useTitle from "../../../hooks/useTitle";
import Instructors from "./Instructors/Instructors";
import About from "./About";
import Banner from "./Banner";
import Courses from "./Courses/Courses";
import Serivces from "./Serivces/Serivces";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Courses></Courses>
            <Instructors></Instructors>
            <Serivces></Serivces>
        </div>
    );
};

export default Home;