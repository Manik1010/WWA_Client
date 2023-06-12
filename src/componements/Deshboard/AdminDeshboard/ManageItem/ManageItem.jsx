import useTitle from "../../../../../hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const ManageItem = () => {

    useTitle("ManageCourse");
    const { data: courses = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("https://wwa-server-manik1010.vercel.app/courses/admin")
        // return res.data;
        return res.json();
    })
    const handleDelete = course => {
        // console.log(course._id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/courses/${course._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const handleApprove = course => {
        // console.log(course.status)
        fetch(`http://localhost:5000/courses/admin/${course._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    // console.log(data)
                    refetch();
                    Swal.fire({
                        position: 'top-start',
                        icon: 'success',
                        title: `${course.name} is an Approved Now!!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
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
                        <th>Available</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        courses.map((course, index) => <tr key={course._id}>
                            <th>{index + 1}</th>
                            <td>{course.name}</td>
                            <td>{course.instructor}</td>
                            <td>{course.set}</td>
                            <td>{course.available_set}</td>
                            <td>{course.status}</td>
                            <td>

                                <button onClick={() => handleApprove(course)} className="btn btn-xs btn-success" disabled={course.status === "Approved"}>approv</button>
                                <button onClick={() => handleFeedback(course)} className="btn btn-xs btn-info ml-1">Feedback</button>
                                <button onClick={() => handleDelete(course)} className="btn btn-xs btn-warning ml-12" disabled={course.status === "Approved"}>Denie</button>

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

