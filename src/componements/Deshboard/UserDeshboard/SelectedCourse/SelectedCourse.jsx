import { Link } from "react-router-dom";
import useBooking from "../../../../../hooks/useBooking";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../../../../hooks/useTitle";


const SelectedCourse = () => {
    useTitle("BookingCourses")
    const [bookings, refetch] = useBooking();
    const handleDelete = item => {
        // console.log(item._id);
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
                fetch(`https://wwa-server.vercel.app/bookings/${item._id}`, {
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
    return (
        <div className="w-full">

            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {bookings.length}</h3>
                {/* <h3 className="text-3xl">Total Price: ${total}</h3> */}
                {/* <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link> */}
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="text-center">Coures</th>
                            <th>Instroter Name</th>
                            <th>Abileable Sets</th>
                            <th>Coures Fee</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            {item.name}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td>
                                    {item.available_set}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <Link to={`/dashboard/payment/${item?._id}`}>
                                        <button className="btn btn-warning btn-sm mr-3">PAY</button>
                                    </Link>
                                    {/* {
                                        console.log(item, item.price)
                                    } */}
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedCourse;