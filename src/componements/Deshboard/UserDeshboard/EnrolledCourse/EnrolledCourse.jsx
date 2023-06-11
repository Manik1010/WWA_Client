import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Tabel from "./Tabel";
import useTitle from "../../../../../hooks/useTitle";

const EnrolledCourse = () => {
    useTitle("EnrollCourse")
    const { user } = useContext(AuthContext)
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/payments?email=${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setPayments(result);
            })
    }, [user])
    // console.log(payments)

    return (
        <>
            {
                payments.map((item, index) => <tr
                    key={item._id}
                >
                    <h1>
                        {index + 1}
                    </h1>
                    {item.bookingItems.map((bookingItem, index) => (
                        // <h1 key={index}>{bookingItem}</h1>
                        <Tabel key={index} bookingItem={bookingItem}></Tabel>
                    ))}


                </tr>)
            }
        </>
        // <div className="w-full">
        //     <div className="overflow-x-auto w-full">
        //         <table className="table w-full">
        //             {/* head */}
        //             <thead>
        //                 <tr>
        //                     <th>#</th>
        //                     <th className="text-center">Coures</th>
        //                     <th>Instroter Name</th>
        //                     <th>Abileable Sets</th>
        //                     <th>Coures Fee</th>
        //                     <th className="text-center">Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     payments.map((item, index) => <tr
        //                         key={item._id}
        //                     >
        //                         <td>
        //                             {index + 1}
        //                         </td>
        //                         {/* <td>
        //                             <div className="flex items-center space-x-3">
        //                                 <div className="avatar">
        //                                     <div className="mask mask-squircle w-12 h-12">
        //                                         <img src={item.image} alt="Avatar Tailwind CSS Component" />
        //                                     </div>
        //                                 </div>
        //                                 <div>
        //                                     {item.name}
        //                                 </div>
        //                             </div>
        //                         </td> */}
        //                         {/* <td> */}
        //                         {item.bookingItems.map((bookingItem, index) => (
        //                             <td key={index}>{bookingItem}</td>
        //                         ))}
        //                         {/* </td> */}
        //                         <td>
        //                             manik
        //                         </td>

        //                     </tr>)
        //                 }


        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
};

export default EnrolledCourse;