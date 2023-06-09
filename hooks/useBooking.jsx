import { useQuery } from '@tanstack/react-query'
// import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../src/providers/AuthProvider';

const useBooking = () => {
    const { user, loading } = useContext(AuthContext)
    // const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();
    const { refetch, data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            // const res = await axiosSecure(`/bookings?email=${user?.email}`)
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            return res.json();
        },
    })
    // console.log(bookings)

    return [bookings, refetch]
    

}
export default useBooking;

