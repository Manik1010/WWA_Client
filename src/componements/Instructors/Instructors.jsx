import { useEffect, useState } from "react";
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
    return (
        <div>
        <div>
            <h1 className="text-3xl text-center font-bold p-24">All Instructo Are Here...</h1>
            <div className="mt-[-100px]">
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