import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { useCreateTaskMutation } from '../../redux/api/apiSlice';
import toast from "cogo-toast";
import { removeUser } from '../../redux/state/userSlice/userSlice';

const CreateTask = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const user = useSelector(state => state.user.user);
    const [createTask] = useCreateTaskMutation()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        const taskData = {
            ...data,
            email: user?.email
        }

        const result = await createTask(taskData);

        if (result.data) {
            toast.success(result.data.message, {
                position: "bottom-center"
            })
            reset();
            navigate("/")
        } else if (result.error.status === 403) {
            dispatch(removeUser())
            navigate("/login");
        }
    }

    return (
        <div className="py-5 lg:px-10 h-screen flex items-center">
            <div className="w-3/4 mx-auto mt-5">
                <motion.div
                    className="card bg-base-100 shadow-xl card-form"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: .5 }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <h2 className="card-title text-slate-700 mb-5">Create New Task</h2>
                            <motion.input
                                type="text"
                                placeholder="Task Name"
                                className="input input-bordered w-full"
                                initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                                animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                                transition={{ duration: .7 }}
                                style={{ originY: 1 }}
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: "Title is required!"
                                    }
                                })}
                            />
                            <p className="text-red-500">{errors?.title?.type === "required" && errors?.title?.message}</p>

                            <motion.textarea
                                className="textarea textarea-bordered mt-2"
                                placeholder="Description"
                                initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                                animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                                transition={{ duration: .7 }}
                                style={{ originY: 1 }}
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "Description is required!"
                                    }
                                })}
                            ></motion.textarea>
                            <p className="text-red-500">{errors?.description?.type === "required" && errors?.description?.message}</p>

                            <motion.div
                                className="card-actions mt-5"
                                initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                                animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                                transition={{ duration: .7 }}
                                style={{ originY: 1 }}
                            >
                                <button type="submit" className="btn btn-primary text-white w-full">Submit</button>
                            </motion.div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default CreateTask;