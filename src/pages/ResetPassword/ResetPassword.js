import React from 'react';
import { motion } from 'framer-motion';
import cookies from "js-cookie";
import toast from "cogo-toast";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useResetPasswordMutation } from '../../redux/api/apiSlice';

const ResetPassword = () => {
    const { handleSubmit, register } = useForm();
    const [resetPassword] = useResetPasswordMutation();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const otp = cookies.get("otp");
        const email = cookies.get("email");
        const password = data?.password;

        const resetData = {
            email,
            password,
            status: "verified",
            otp
        }
        
        const result = await resetPassword(resetData);
        
        if(result?.data?.success) {
            toast.success("Password reset completed", {
                position: "bottom-center"
            });
            navigate("/login");
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
                >Enter new password</motion.h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <motion.input
                            type="text"
                            placeholder="New password"
                            className="input input-bordered w-full my-1"
                            initial={{ translateY: 100, opacity: 0, scaleY: 0 }}
                            animate={{ translateY: 0, opacity: 1, scaleY: 1 }}
                            transition={{ duration: .7 }}
                            style={{ originY: 1 }}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Email is required!"
                                }
                            })}
                        />

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

export default ResetPassword;