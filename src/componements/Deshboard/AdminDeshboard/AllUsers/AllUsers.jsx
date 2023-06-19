import useTitle from "../../../../../hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt, FaUserShield, FaUserSlash } from "react-icons/fa";
import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReactModal from 'react-modal';
import { useState } from "react";



const AllUsers = () => {
    useTitle("AllUsers");
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedRole, setUpdatedRole] = useState("");

    const handleEdit = (user) => {
        // Additional logic if needed
        setSelectedUser(user);
        setUpdatedRole(user.role);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:5000/users")
        // return res.data;
        return res.json();
    })



    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
const handleSubmit = () => {
    if (!selectedUser) return;

    // Update the user role
    fetch(`http://localhost:5000/users/${selectedUser._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: updatedRole })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${selectedUser.name} role updated successfully!`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });

    handleCloseModal();
  };

    const handleDelete = user => {
        // console.log(user._id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'Admin' ? 'Admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                    }
                                    {user.role === 'Instructor' ? 'Instructor' :
                                        <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost ml-2 bg-orange-300  text-white"><FaUserSlash></FaUserSlash></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                    {/* <button onClick={() => handleEdit(user)} className="btn btn-ghost bg-red-400  text-white ml-2"><FaEdit></FaEdit></button> */}
                                    <button onClick={() => handleEdit(user)} className="btn btn-ghost bg-red-400  text-white ml-2"><FaEdit></FaEdit></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {/* Modal */}
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
            >
                <h2 className="mx-auto text-center text-xl font-bold">Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Role:
                        <select value={updatedRole} onChange={e => setUpdatedRole(e.target.value)}>
                            <option value="Admin">Admin</option>
                            <option value="Instructor">Instructor</option>
                        </select>
                    </label>
                    <button type="submit" className="btn btn-active btn-accent">Save</button>
                    <button type="button" onClick={handleCloseModal} className="btn btn-error ml-2">Cancel</button>
                </form>
            </ReactModal>
        </div>
    );
};

export default AllUsers;