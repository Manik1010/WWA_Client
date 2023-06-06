import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Instructor from "./Instructor";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("Instructors.json")
            .then(res => res.json())
            .then(result => {
                setInstructors(result);
            })
    }, [])
    console.log(instructors)
    return (
        <div>
            <SectionTitle
                subHeading='Most Populer'
                heading='Find here great Instructors here'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    instructors?.map(instructor => (
                        <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>
                    ))
                }
            </div>
        </div>
    );
};

export default Instructors;