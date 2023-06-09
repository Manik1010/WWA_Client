import useTitle from "../../../../hooks/useTitle";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useCourese from "../../../../hooks/useCourese";

const MyCourses = () => {
    useTitle("MyCoures");
    // const { data: courses = [], refetch } = useQuery(['courses'], async () => {
    //     const res = await fetch("http://localhost:5000/courses")
    //     // return res.data;
    //     return res.json();
    // })
    // const {user } = useContext(AuthContext);
    // const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/courses/${user.email}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             setCourses(result);
    //         })
    // }, [])
    // console.log(user.email)
    const [courses, refetch] = useCourese();
    // console.log(courses);

    return (
        <div className="overflow-x-auto">
            <SectionTitle
                subHeading='Instructor'
                heading='Instructor want to manage course!!!'
            ></SectionTitle>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Course</th>
                        <th>Instructor Name</th>
                        <th>Total Sets</th>
                        <th>Available Sets</th>
                        <th>Status</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>

                    {/* {
                        courses.map((course, index) => <tr key={course._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        {course.name}
                                    </div>
                                </div>
                            </td>
                            <td>{course.instructor}</td>
                            <td>{course.set}</td>
                            <td>{course.available_set}</td>
                            <td>{course?.status}</td>

                        </tr>)
                    } */}

                </tbody>
                {/* foot */}


            </table>
        </div>
    );
};

export default MyCourses;