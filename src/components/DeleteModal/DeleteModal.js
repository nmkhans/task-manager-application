import React from 'react';
import toast from "cogo-toast";
import { useDeleteTaskMutation } from '../../redux/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../redux/state/userSlice/userSlice';
import { useDispatch } from 'react-redux';

const DeleteModal = ({ taskInfo }) => {
    const [deleteTask] = useDeleteTaskMutation();
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleDelete = async () => {
        const result = await deleteTask(taskInfo._id);
        
        if (result.data) {
            toast.success(result.data.message, {
                position: "bottom-center"
            })
            navigate("/")
        } else if (result.error.status === 403) {
            dispatch(removeUser())
            navigate("/login");
        }
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <label htmlFor="delete-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="#">
                    <h3 className="text-xl text-slate-700 text-center font-bold">Delete Task!</h3>
                    <div className="text-center mt-3">
                        <p className="text-lg text-slate-700 font-semibold">Are you sure about deleting this task?</p>
                        <div className="mt-5">
                            <button onClick={handleDelete} className="btn btn-md w-1/3 bg-red-600 border-0 text-white">Yes!</button>
                        </div>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default DeleteModal;