import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
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
        try {
            const taskData = {
                ...data,
                email: user.email
            }

            const result = await createTask(taskData);

            if (result.data) {
                toast.success(result.data.message, {
                    position: "bottom-center"
                })
                reset();
            } else if (result.error.status === 403) {
                dispatch(removeUser())
                navigate("/login");
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="py-5 px-10">
            <div className="w-3/4 mx-auto mt-5">
                <div className="card bg-base-100 shadow-xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <h2 className="card-title text-slate-700 mb-5">Create New Task</h2>
                            <input
                                type="text"
                                placeholder="Task Name"
                                className="input input-bordered w-full"
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: "Title is required!"
                                    }
                                })}
                            />
                            <p className="text-red-500">{errors?.title?.type === "required" && errors?.title?.message}</p>

                            <textarea
                                className="textarea textarea-bordered mt-2" placeholder="Description"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "Description is required!"
                                    }
                                })}
                            ></textarea>
                            <p className="text-red-500">{errors?.description?.type === "required" && errors?.description?.message}</p>

                            <div className="card-actions mt-5">
                                <button type="submit" className="btn btn-primary text-white w-full">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;