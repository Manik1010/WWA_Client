// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// const Class = ({ course }) => {
//     const { name, price, set, instructor, image, _id, disp, available_set } = course
//     // console.log(available_set, set)
//     const {user} = useContext(AuthContext)
//     const navigate = useNavigate()
//   const cardClass = `card w-96 bg-base-100 shadow-xl ${available_set === 0 ? 'bg-red' : 'bg-sky-500/100'}`;

//     const handelAddBooking = item => {
//         // console.log(item)
//         if(user && user.email){
//             const bookingCourse = { courseId: _id, name, image, price,set,available_set,instructor, bookerEmail: user.email}
//             // console.log(bookingCourse);

//             fetch('http://localhost:5000/bookings', {
//                 method: "POST",
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(bookingCourse)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 if(data.insertedId){
//                     Swal.fire({
//                         position: 'top-end',
//                         icon: 'success',
//                         title: 'Coures booking successfully',
//                         showConfirmButton: false,
//                         timer: 1500
//                       })
//                 }
//             })
//         }
//         else{
//             Swal.fire({
//                 title: 'Please login to abooking a course!!!',
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonColor: '#3085d6',
//                 cancelButtonColor: '#d33',
//                 confirmButtonText: 'Login Now!'
//               }).then((result) => {
//                 if (result.isConfirmed) {
//                     navigate('/login')
//                 }
//               })
//         }
//     }
//     return (
//         <div className="card card-side bg-base-100 shadow-xl m-4 p-8 ">
//             <img className="p-8 w-[900px]" src={image} alt="Shoes" />
//             {/* <figure><img src={image} alt="Shoes" /></figure> */}
//             <div className="card-body p-4">
//                 <h3 className="md:text-right font-semibold">Available seats: {available_set}</h3>
//                 <h2 className="card-title font-bold">Course Name: {name}</h2>
//                 <h4>Instructor Name: {instructor}</h4>
//                 <p>Coures Fee: ${price}</p>
//                 <p>Total Set: {set}</p>
//                 <p>Discripatioh: {disp}</p>

//                 <div className="card-actions justify-end">
//                     <button onClick={()=> handelAddBooking(course)} className="btn btn-active btn-ghost">Booking</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Class;



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

            fetch('http://localhost:5000/bookings', {
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
        <div className={cardClass}>
            <img className="p-8 w-[900px]" src={image} alt="Shoes" />
            <div className="card-body p-4">
                <h3 className="md:text-right font-semibold">Available seats: {available_set}</h3>
                <h2 className="card-title font-bold">Course Name: {name}</h2>
                <h4>Instructor Name: {instructor}</h4>
                <p>Course Fee: ${price}</p>
                <p>Total Set: {set}</p>
                <p>Description: {disp}</p>

                <div className="card-actions justify-end">
                    <button onClick={() => handelAddBooking(course)} className="btn btn-active btn-ghost" disabled={available_set === 0}>Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Class;
