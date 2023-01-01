import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useGenerateOtpMutation } from '../../redux/api/apiSlice';
import cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import toast from "cogo-toast";

const ResetEmail = () => {
    const { handleSubmit, register, errors } = useForm();
    const [generateOtp] = useGenerateOtpMutation();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const result = await generateOtp(data?.email);
        cookies.set("otp", result.data.data.otp)
        cookies.set("email", result.data.data.email)
        const token = cookies.get("otp");

        if(token) {
            toast.success("OTP has been sent to email.", {
                position: "bottom-center"
            })
            navigate("/reset-password/verify")
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
                >Enter email</motion.h2>
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

                        <motion.div
                            className="card-actions mt-3 justify-center"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                        >
                            <button type="submit" className="btn btn-primary w-full text-white">Submit</button>
                        </motion.div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default ResetEmail;