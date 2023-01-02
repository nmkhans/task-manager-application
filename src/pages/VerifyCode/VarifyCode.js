import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactCodeInput from "react-code-input";
import cookies from "js-cookie";
import { useVerifyOtpMutation } from '../../redux/api/apiSlice';
import toast from "cogo-toast";
import { useNavigate } from 'react-router-dom';

const VarifyCode = () => {
    const [code, setCode] = useState(null);
    const [verifyOtp] = useVerifyOtpMutation();
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        const email = cookies.get("email");
        const otpData = {email, code}
        const result = await verifyOtp(otpData);
        console.log(result)
        
        if(result?.data?.success) {
            toast.success("Otp verified", {
                position: "bottom-center"
            });
            navigate("/reset-password")
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
                >Enter varification code</motion.h2>
                <form onSubmit={onSubmit}>
                    <div className="card-body">
                        <div className="text-center my-3">
                            <ReactCodeInput
                                type='number'
                                fields={6}
                                onChange={(event) => setCode(event)}
                            />
                        </div>

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

export default VarifyCode;