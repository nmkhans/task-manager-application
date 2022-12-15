import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useImageUploder from './../../hooks/useImageUploader/useImageUploder';
import { useRegisterUserMutation } from '../../redux/api/apiSlice';
import toast from "cogo-toast";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { imageUpload } = useImageUploder();
    const [registerUser] = useRegisterUserMutation()

    const onSubmit = async (data) => {
        if (data.password === data.confirmPassword) {
            delete data.confirmPassword;
            const img = data.image[0];
            const imageUrl = await imageUpload(img);

            const userData = {
                ...data,
                image: imageUrl
            };
            const result = await registerUser(userData);

            if (result.data) {
                toast.success(result.data.message, {
                    position: "bottom-center"
                })
            } else {
                toast.error(result.error.data.message, {
                    position: "bottom-center"
                })
            }
        } else {
            toast.error("Please match password and confirm password!", {
                position: "bottom-center"
            })
        }
    }
    console.log(errors)

    return (
        <div className="bg-base-200 flex items-center justify-center py-10">
            <div className="card w-2/4 bg-base-100 shadow-xl py-10 px-5">
                <h2 className="text-center text-2xl font-semibold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="input input-bordered w-full my-1"
                            {...register("firstName", {
                                required: {
                                    value: true,
                                    message: "First name is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.firstName?.type === "required" && errors?.firstName?.message}</p>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="input input-bordered w-full my-1"
                            {...register("lastName", {
                                required: {
                                    value: true,
                                    message: "Last name is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.lastName?.type === "required" && errors?.lastName?.message}</p>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input input-bordered w-full my-1"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.email?.type === "required" && errors?.email?.message}</p>
                        <input
                            type="number"
                            placeholder="Phone Number" className="input input-bordered w-full my-1"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Phone number is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.phone?.type === "required" && errors?.phone?.message}</p>
                        <input
                            type="file"
                            className="input input-bordered w-full my-1 p-2"
                            {...register("image", {
                                required: true,
                                message: "Profile image is required!"
                            })}
                        />
                        <p className="text-red-500">{errors?.image?.type === "required" && errors?.image?.message}</p>
                        <input
                            type="password"
                            placeholder="Password" className="input input-bordered w-full my-1"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.password?.type === "required" && errors?.password?.message}</p>
                        <input
                            type="password"
                            placeholder="Confirm Password" className="input input-bordered w-full my-1"
                            {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Password is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.password?.type === "required" && errors?.password?.message}</p>

                        <div className="card-actions mt-3 justify-center">
                            <button type="submit" className="btn btn-primary w-full text-white">Submit</button>
                            <span className="mt-3 text-slate-500">
                                <Link to="/login">Sign In</Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;