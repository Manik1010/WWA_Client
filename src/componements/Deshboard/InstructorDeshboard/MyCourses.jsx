// import { useContext, useEffect, useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import SectionTitle from "../../SectionTitle/SectionTitle";
// import { AuthContext } from "../../../providers/AuthProvider";
import useCourese from "../../../../hooks/useCourese";
import { Link } from "react-router-dom";

const MyCourses = () => {
    useTitle("MyCoures");

    const [courses] = useCourese();
    // console.log(courses);
    

    return (
        <div className="w-full">
            <SectionTitle
                subHeading='Instructor'
                heading='Want to manage course!!!'
            ></SectionTitle>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Course</th>
                        <th>Course Fee</th>
                        <th>Total Sets</th>
                        <th>Available Sets</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        courses.map((course, index) => <tr key={course._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        {course.name}
                                    </div>
                                </div>
                            </td>
                            <td>{course.email}</td>
                            <td>{course.set}</td>
                            <td>{course.available_set}</td>
                            <td>{course?.status}</td>
                            <td></td>
                            <td>
                                <Link to={`/dashboard/edit/${course?._id}`}>
                                    <button className="btn btn-ghost btn-xs">Edite</button>
                                </Link>
                            </td>

                        </tr>)
                    }

                </tbody>
                {/* foot */}


            </table>
        </div>
    );
};

export default MyCourses;