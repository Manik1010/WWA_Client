import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../src/providers/AuthProvider';

const useCourese = () => {
    const { user, loading } = useContext(AuthContext)

    const { refetch, data: courses = [] } = useQuery({
        queryKey: ['courses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/courses?email=${user?.email}`)
            return res.json();
        },
    })
    // console.log(courses)
    // console.log(courses?.email)

    return [courses, refetch]

}
export default useCourese;