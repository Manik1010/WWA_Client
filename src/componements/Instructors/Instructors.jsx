import { useEffect, useState } from "react";
import Instructor from "./Instructor";
import useTitle from "../../../hooks/useTitle";

const Instructors = () => {
    useTitle("Instructors")
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/instructors")
            .then(res => res.json())
            .then(result => {
                setInstructors(result);
            })
    }, [])
    return (
        <div>
        <div>
            <h1 className="text-3xl text-center font-bold p-24">All Instructo Are Here...</h1>
            <div className="mt-[-100px]"
                        // data-aos="fade-down"
                        // data-aos-easing="linear"
                        // data-aos-duration="1500"
            >
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
    </div>
    );
};

export default Instructors;