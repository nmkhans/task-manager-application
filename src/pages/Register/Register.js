import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from "cogo-toast";
import { motion } from "framer-motion";
import useImageUploder from './../../hooks/useImageUploader/useImageUploder';
import { useRegisterUserMutation } from '../../redux/api/apiSlice';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { imageUpload } = useImageUploder();
    const [registerUser] = useRegisterUserMutation()
    const navigate = useNavigate()

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
                reset();
                navigate("/");
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

    return (
        <div className="bg-base-200 flex items-center justify-center py-10">
            <motion.div
                className="card w-2/4 bg-base-100 shadow-xl py-10 px-5"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration: .5}}
            >
                <motion.h2
                    className="text-center text-slate-700 text-2xl font-semibold"
                    initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                    animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                    transition={{ duration: .7 }}
                    style={{ originY: 1 }}
                >Register</motion.h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <motion.input
                            type="text"
                            placeholder="First Name"
                            className="input input-bordered w-full my-1"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                            {...register("firstName", {
                                required: {
                                    value: true,
                                    message: "First name is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.firstName?.type === "required" && errors?.firstName?.message}</p>
                        <motion.input
                            type="text"
                            placeholder="Last Name"
                            className="input input-bordered w-full my-1"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                            {...register("lastName", {
                                required: {
                                    value: true,
                                    message: "Last name is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.lastName?.type === "required" && errors?.lastName?.message}</p>
                        <motion.input
                            type="email"
                            placeholder="Email Address"
                            className="input input-bordered w-full my-1"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required!"
                                },
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Enter valid email!'
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.email?.type === "required" && errors?.email?.message}</p>
                        <p className="text-red-500">{errors?.email?.type === "pattern" && errors?.email?.message}</p>
                        
                        <motion.input
                            type="number"
                            placeholder="Phone Number" className="input input-bordered w-full my-1"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Phone number is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.phone?.type === "required" && errors?.phone?.message}</p>
                        <motion.input
                            type="file"
                            className="input input-bordered w-full my-1 p-2"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                            {...register("image", {
                                required: true,
                                message: "Profile image is required!"
                            })}
                        />
                        <p className="text-red-500">{errors?.image?.type === "required" && errors?.image?.message}</p>
                        <motion.input
                            type="password"
                            placeholder="Password" className="input input-bordered w-full my-1"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.password?.type === "required" && errors?.password?.message}</p>
                        <motion.input
                            type="password"
                            placeholder="Confirm Password" className="input input-bordered w-full my-1"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                            {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Password is required!"
                                }
                            })}
                        />
                        <p className="text-red-500">{errors?.password?.type === "required" && errors?.password?.message}</p>

                        <motion.div
                            className="card-actions mt-3 justify-center"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                        >
                            <button type="submit" className="btn btn-primary w-full text-white">Submit</button>
                            <span className="mt-3 text-slate-500">
                                <Link to="/login">Log In</Link>
                            </span>
                        </motion.div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Register;