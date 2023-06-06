import useTitle from "../../../hooks/useTitle";
import About from "./About";
import Banner from "./Banner";
import Serivces from "./Serivces/Serivces";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <About></About>
            Home......
            <Serivces></Serivces>
        </div>
    );
};

export default Home;