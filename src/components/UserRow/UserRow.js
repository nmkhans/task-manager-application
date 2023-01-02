import React from 'react';
import { useDeleteUserMutation } from '../../redux/api/apiSlice';
import toast from "cogo-toast";

const UserRow = ({ user }) => {
    const { _id, firstName, lastName, email, phone, role, image } = user;
    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = async (id) => {
        const result = await deleteUser(id);
        
        if(result.data.success) {
            toast.success(result.data.message, {
                position: "bottom-center"
            });
        }
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {firstName + " " + lastName}
                        </div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{"0" + phone}</td>
            <td>{role}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-500 text-white border-0">Delete</button>
            </td>
        </tr>
    );
};

export default UserRow;