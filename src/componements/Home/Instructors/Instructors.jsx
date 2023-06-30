import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Instructor from "./Instructor";
import { Link } from "react-router-dom";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("https://wwa-server.vercel.app/instructors/card")
            .then(res => res.json())
            .then(result => {
                setInstructors(result);
            })
    }, [])
    // console.log(instructors)
    return (
        <div>
            <SectionTitle
                subHeading='Most Populer'
                heading='Find here great Instructors here'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    instructors?.map(instructor => (
                        <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>
                    ))
                }
            </div>
            <Link to="/instructor" className="btn btn-active btn-ghost">View Diteles</Link>
        </div>
    );
};

export default Instructors;