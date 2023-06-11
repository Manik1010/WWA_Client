// import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Edit = () => {
    // const { id } = useParams();
    // console.log(id)
    const editCourse = useLoaderData();
    // console.log(editCourse)
    const { disp, name, price, set, instructor, image, _id, email, } = editCourse
    const handelUpdate = event => {
        event.preventDefault();

        const frm = event.target;

        const name = frm.name.value;
        const instructor = frm.instructor.value;
        const email = frm.email.value;
        const set = frm.set.value;
        const price = frm.price.value;
        const disp = frm.disp.value;


        // console.log(name, instructor);
        const updateCourse = { name, instructor, email, set, price, disp }
        // console.log(updateCourse);

        fetch(`http://localhost:5000/updateCourse/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateCourse)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Course Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    //   frm.reset();
                    // setControl(!control);
                }
            })



    }


    return (
        <div className='w-full bg-[#F4F3F0] p-2'>
            <h2 className='text-3xl font-bold text-center'>Edit Course</h2>
            <form onSubmit={handelUpdate}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Course Name*</span>
                    </label>
                    <input  defaultValue={name} name="name"

                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instroctor Name*</span>
                        </label>
                        <input defaultValue={instructor} name="instructor"

                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Instroctor Email*</span>
                        </label>
                        <input defaultValue={email} name="email"

                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Course Sets</span>
                        </label>
                        <input defaultValue={set} name='set' className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input defaultValue={price} name='price' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Details</span>
                    </label>
                    <textarea defaultValue={disp} name="disp" className="textarea textarea-bordered h-24" ></textarea>
                </div>
                {/* <div className="flex my-4">
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Course Image*</span>
                        </label>
                        <input type="file" defaultValue={image} className="file-input file-input-bordered" />
                    </div>

                </div> */}
                <input type='submit' value="Update Toy" className="btn btn-block" />

            </form>
        </div>
    );
};

export default Edit;