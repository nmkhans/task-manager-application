import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";

const ProfileDetail = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            style={{originY: 0}}
            transition={{duration: .3}}
            className="bg-base-100 w-[300px] rounded-lg shadow-lg py-5"
        >
            <div className="pb-3">
                <h3 className="text-lg font-semibold text-center">Hello Moin Khan</h3>
            </div>
            <li className="block">
                <div className="block hover:bg-primary hover:text-base-100 hover:pl-10 transition-all text-center">
                    <Link className="flex items-center justify-center" to="/login">
                        <span>Login</span>
                        <span className="ml-1"><FiLogIn /></span>
                    </Link>
                </div>
            </li>
            <li className="block">
                <div className="block hover:bg-primary hover:text-base-100 text-center">
                    <Link to="/register">Register</Link>
                </div>
            </li>
            <li className="block">
                <div className="block hover:bg-primary hover:text-base-100 text-center">
                    Logout
                </div>
            </li>
        </motion.div>
    );
};

export default ProfileDetail;