import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Class = ({ course }) => {
    const { name, price, set, instructor, image, _id, disp, available_set } = course;
    
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelAddBooking = item => {

        if (user && user.email) {
            const bookingCourse = { courseId: _id, name, image, price, set, available_set, instructor, bookerEmail: user.email };
            // {available_set-1}
            fetch('https://wwa-server.vercel.app/bookings', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingCourse)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course booked successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        } else {
            Swal.fire({
                title: 'Please login to book a course!!!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    };

    const cardClass = `card card-side bg-base-100 shadow-xl m-4 p-8 ${available_set === 0 ? 'bg-red-500' : ''}`;

    return (
        <div className={cardClass} data-aos="zoom-out-up">
            <img className="p-8 w-[900px]" src={image} alt="Shoes" />
            <div className="card-body p-4">
                <h3 className="md:text-right font-semibold">Available seats: {available_set}</h3>
                <h2 className="card-title font-bold">Course Name: {name}</h2>
                <h4> <span className="font-semibold">Instructor Name:</span> {instructor}</h4>
                <p> <span className="font-semibold">Course Fee: </span>  ${price}</p>
                <p> <span className="font-semibold">Total Set:</span>  {set}</p>
                <p> <span className="font-semibold">Description:</span>  {disp}</p>

                <div className="card-actions justify-end">
                    <button onClick={() => handelAddBooking(course)} className="btn btn-active btn-ghost" disabled={available_set === 0}>Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Class;
