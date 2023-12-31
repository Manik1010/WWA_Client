import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../src/providers/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';

const useCourese = () => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user)
    // const token = localStorage.getItem('access-token')
    // const [axiosSecure] = useAxiosSecure()

    const { refetch, data: courses = [] } = useQuery({
        queryKey: ['courses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            // const res = await fetch(`http://localhost:5000/courses?email=${user?.email}`)

            //veryfi
            // const res = await fetch(`http://localhost:5000/courses?email=${user?.email}`, { headers: {
            //     authorization: `bearer ${token}`
            // }})
            // return res.json();

            // const res = await axiosSecure(`/courses?email=${user?.email}`)
            // return res.data;
            const res = await fetch(`https://wwa-server.vercel.app/courses?email=${user?.email}`)
            return res.json();
        },
    })
    
    // console.log(courses?.email)

    return [courses, refetch]

}
export default useCourese;