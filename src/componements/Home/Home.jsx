import useTitle from "../../../hooks/useTitle";
import Instructors from "./Instructors/Instructors";
import About from "./About";
import Banner from "./Banner";
import Courses from "./Courses/Courses";
import Serivces from "./Serivces/Serivces";
import { useState, useEffect } from "react";


const Home = () => {
    useTitle("Home")

    // State to track the current theme
    const [theme, setTheme] = useState("light");

    // Function to toggle the theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Save the theme preference to localStorage
    };

    // Load the theme preference from localStorage on initial render
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Apply the theme class to the root element based on the current theme
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Courses></Courses>
            <Instructors></Instructors>
            <Serivces></Serivces>
            <button onClick={toggleTheme} className="btn btn-accent">Toggle Theme</button>
        </div>
    );
};

export default Home;