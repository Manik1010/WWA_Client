import { useEffect, useState } from "react";
import Class from "./Class";
// import SectionTitle from "../SectionTitle/SectionTitle";

const Classes = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("langoues.json")
            .then(res => res.json())
            .then(result => {
                setCourses(result);
            })
    }, [])
    // console.log(courses);
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center font-bold p-24">All Course Are Here...</h1>
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