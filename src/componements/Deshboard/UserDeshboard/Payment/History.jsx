// import usePayment from "../../../../../hooks/usePayment";

import { useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useContext } from "react";
import useTitle from "../../../../../hooks/useTitle";

const History = () => {
    useTitle("PaymentHistory")
    // const [payments] = usePayment()
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
        <div className="w-full">

            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: </h3>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>price</th>
                            <th className="text-center">Date</th>
                            <th>Statues</th>
                            <th className="text-center">TransactionId</th>
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
                                    {item.quantity}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                
                                    {item.date}
                                </td>
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    {item.transactionId}
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;