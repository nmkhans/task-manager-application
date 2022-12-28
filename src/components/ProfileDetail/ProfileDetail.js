import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";

const ProfileDetail = ({user, handleLogout}) => {
    
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            style={{ originY: 0 }}
            transition={{ duration: .3 }}
            className="bg-base-100 w-[300px] rounded-lg shadow-lg py-5"
        >
            <div className="pb-3 border-b">
                <div className="text-center">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.image} alt="profile" />
                        </div>
                    </div>
                </div>
                <h3 className="text-lg text-slate-700 font-semibold text-center my-2">
                    {user?.firstName + " " + user?.lastName}
                </h3>
            </div>
            {(user.role === "admin") && (
                <li className="block">
                <div className="block hover:bg-primary hover:text-base-100 hover:pl-10 transition-all text-center">
                    <Link className="flex items-center justify-center" to="/admin">
                        <span className="mr-1"><RiAdminLine /></span>
                        <span>Admin</span>
                    </Link>
                </div>
            </li>
            )}
            <li className="block">
                <div className="block hover:bg-primary hover:text-base-100 hover:pl-10 transition-all text-center">
                    <Link className="flex items-center justify-center" to="/profile">
                        <span className="mr-1"><AiOutlineUser /></span>
                        <span>Profile</span>
                    </Link>
                </div>
            </li>
            <li className="block">
                <div className="block hover:bg-primary hover:text-base-100 hover:pl-10 transition-all text-center">
                    <Link onClick={handleLogout} className="flex items-center justify-center" to="/login">
                        <span className="mr-1"><FiLogOut /></span>
                        <span>Logout</span>
                    </Link>
                </div>
            </li>
        </motion.div>
    );
};

export default ProfileDetail;