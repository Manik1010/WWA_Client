import { useContext } from "react";
import { AuthContext } from "../src/providers/AuthProvider";
import { useQuery } from "react-query";

const usePayment = () => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)

    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://wwa-server.vercel.app/payments?email=${user?.email}`)
            return res.json();
        },
    })
    console.log(payments)

    return [payments, refetch]
};

export default usePayment;