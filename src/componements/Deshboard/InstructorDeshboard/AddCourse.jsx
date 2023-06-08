import Swal from "sweetalert2";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useTitle from "../../../../hooks/useTitle";
// import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddCourse = () => {

    useTitle("AddCourse");
    const {user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const onSubmit = data => {
        // console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                // console.log(data, imgURL)
                const {name, price, instructor, email, set, status, disp} = data;
                const newItem = {name,instructor, email, set, price: parseFloat(price), status, disp, image:imgURL}
                // console.log(newItem)
                axiosSecure.post('/courses', newItem)
                .then(data => {
                    console.log('After posting new course item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    // console.log(img_hosting_token)
    // console.log(errors);

    // const { data: courses = [], refetch } = useQuery(['courses'], async () => {
    //     const res = await fetch("http://localhost:5000/courses")
    //     // return res.data;
    //     return res.json();
    // })


    return (
        <div className="w-full px-10">
            <SectionTitle
                subHeading="What's new" heading="Add A Course"
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Course Name*</span>
                    </label>
                    <input type="text" placeholder="Course Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instroctor Name*</span>
                        </label>
                        <input type="text" placeholder="Instroctor Name"
                            {...register("instructor", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Instroctor Email*</span>
                        </label>
                        <input value={user.email}
                            {...register("email", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Course Sets</span>
                        </label>
                        <input type="text" placeholder="Course Total Sets"
                            {...register("set", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here course price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Details</span>
                    </label>
                    <textarea {...register("disp", { required: true })} className="textarea textarea-bordered h-24" placeholder="Course Full Details"></textarea>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Course Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered" />
                    </div>
                    
                    <div className="form-control w-full my-4 ml-4">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input
                            value="Panding"
                            {...register("status", { required: true })}
                            className="file-input file-input-bordered w-full"
                        />
                    </div>
                </div>
                <input className="btn btn-sm mb-4" type="submit" value="Add Course" />
            </form>
        </div>
    );
};

export default AddCourse;