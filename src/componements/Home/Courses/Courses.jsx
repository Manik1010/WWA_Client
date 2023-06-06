import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Course from "./course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("langoues.json")
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setCourses(result);
            })
    }, [])
    // console.log(courses);

    return (

        <div>
            <SectionTitle
                subHeading='Do you want to learn?'
                heading='Find the course you like'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    courses?.map(course => (
                        <Course
                            key={course._id}
                            course={course}
                        ></Course>
                    ))
                }
            </div>
            <button className="btn btn-active btn-ghost p-2 mt-4">Booking Course</button>
        </div>
    );
};

export default Courses;