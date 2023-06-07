import useTitle from "../../../../../hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const ManageItem = () => {

    useTitle("ManageItem");
    const { data: courses = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:5000/courses")
        // return res.data;
        return res.json();
    })
    return (
        <div className="overflow-x-auto">
            <SectionTitle
                subHeading='AdminPanal'
                heading='Admin want to manage!!!'
            ></SectionTitle>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Course</th>
                        <th>Instructor Name</th>
                        <th>Total Sets</th>
                        <th>Available Sets</th>
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
                            <td>{course.instructor}</td>
                            <td>{course.set}</td>
                            <td>{course.available_set}</td>
                            <td>
                                <button className="btn btn-xs p-1">pending</button>
                                <button className="btn btn-xs p-1">approv</button>
                                <button className="btn btn-xs p-1">Denie</button>
                            </td>

                        </tr>)
                    }

                </tbody>
                {/* foot */}


            </table>
        </div>
    );
};

export default ManageItem;