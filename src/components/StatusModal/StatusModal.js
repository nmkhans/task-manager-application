import React from 'react';
import { useForm } from "react-hook-form";

const StatusModal = ({ taskInfo }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const status = data.status;
        console.log(status)
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