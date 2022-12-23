import React from 'react';
import { useForm } from "react-hook-form";
import { useUpdateTaskMutation } from '../../redux/api/apiSlice';
import toast from 'cogo-toast';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../redux/state/userSlice/userSlice';
import { useDispatch } from 'react-redux';

const StatusModal = ({ taskInfo }) => {
    const { register, handleSubmit, reset } = useForm();
    const [updateTask] = useUpdateTaskMutation()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const status = data.status;
        const statusData = {
            id: taskInfo._id,
            status: {
                status: status
            }
        }
        
        const result = await updateTask(statusData);

        if (result.data) {
            toast.success(result.data.message, {
                position: "bottom-center"
            })
            reset();
        } else if (result.error.status === 403) {
            dispatch(removeUser())
            navigate("/login");
        }
    }

    return (
        <div>
            <input type="checkbox" id="status-modal" className="modal-toggle" />
            <label htmlFor="status-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="#">
                    <h3 className="text-xl text-slate-700 text-center font-bold">Update Status</h3>
                    <div className="text-center mt-5">
                        <form onChange={handleSubmit(onSubmit)}>
                            <select
                                className="select select-bordered w-full"
                                {...register("status")}
                            >
                                <option value="new">new</option>
                                <option value="pending">pending</option>
                                <option value="completed">completed</option>
                                <option value="canceled">canceled</option>
                            </select>
                        </form>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default StatusModal;