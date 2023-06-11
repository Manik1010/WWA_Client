import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../src/providers/AuthProvider";

const useAdmin = () => {
    const { user, loading} = useContext(AuthContext);
    // console.log(user);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user?.email}`);
            // console.log('is admin responsos', res)
            return res.data;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;