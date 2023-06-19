import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
// import Tabel from "./Tabel";
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
        // <>
        //     {
        //         payments.map((item, index) => <tr
        //             key={item._id}
        //         >
        //             <h1>
        //                 {index + 1}
        //             </h1>
        //             {item.bookingItems.map((bookingItem, index) => (
        //                 // <h1 key={index}>{bookingItem}</h1>
        //                 <Tabel key={index} bookingItem={bookingItem}></Tabel>
        //             ))}


        //         </tr>)
        //     }
        // </>
        <div className="w-full">
            <h1 className="text-center">Enrolled Classes...</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="text-center">Coures</th>
                            <th>Instroter Name</th>
                            <th>Date</th>
                            <th>Coures Fee</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                  {item.email}
                                </td>
                                <td>
                                    {item.date}
                                </td>
                                <td>
                                    {item.price}
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledCourse;