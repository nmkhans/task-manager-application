import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from "cogo-toast";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from '../../redux/api/apiSlice';
import { addUser } from '../../redux/state/userSlice/userSlice';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loginUser] = useLoginUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const result = await loginUser(data);

        if (result.data) {
            toast.success(result.data.message, {
                position: "bottom-center"
            });
            dispatch(addUser(result.data))
            reset();
            navigate("/")
        } else {
            toast.error(result.error.data.message, {
                position: "bottom-center"
            })
        }
    }

    return (
        <div className="bg-base-200 h-screen flex items-center justify-center py-10 px-5 md:px-0 lg:px-0">
            <motion.div
                className="card w-full md:w-2/4 lg:w-2/4 bg-base-100 shadow-xl py-10 px-5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: .5 }}
            >
                <motion.h2
                    className="text-center text-slate-700 text-2xl font-semibold"
                    initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                    animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                    transition={{ duration: .7 }}
                    style={{ originY: 1 }}
                >Login</motion.h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
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

                        <motion.div
                            className="card-actions mt-3 justify-center"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                        >
                            <button type="submit" className="btn btn-primary w-full text-white">Submit</button>
                            <span className="mt-3 text-slate-500">
                                <Link to="/register">Register</Link>
                            </span>
                        </motion.div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;