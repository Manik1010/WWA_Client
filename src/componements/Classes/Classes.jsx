import { useEffect, useState } from "react";
import Class from "./Class";
import useTitle from "../../../hooks/useTitle";
// import SectionTitle from "../SectionTitle/SectionTitle";

const Classes = () => {
    useTitle("Courses")
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/courses")
            .then(res => res.json())
            .then(result => {
                setCourses(result);
            })
    }, [])
    // console.log(courses);
    return (
        <div>
            <div>
                {/* <div className="mt-10">
                    <SectionTitle
                    subHeading='All Course Are Here'
                    heading='You Can Book Course!!!'
                    ></SectionTitle>
                </div> */}
                <h1 className="text-3xl text-center font-bold p-24">All Course Are Here... You Can Book Course!!!</h1>
                <div className="mt-[-100px]">
                    {
                        courses?.map(course => (
                            <Class
                                key={course._id}
                                course={course}
                            ></Class>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;