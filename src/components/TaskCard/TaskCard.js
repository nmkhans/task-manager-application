import React from 'react';
import { motion } from "framer-motion";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const TaskCard = ({ detail }) => {
    
    return (
        <motion.div
            className="card bg-base-100 shadow-xl"
            initial={{ opacity: 0, scaleY: 0, translateY: 200 }}
            animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
            transition={{ duration: .5 }}
        >
            <div className="card-body">
                <h2 className="text-lg text-slate-700 font-semibold">{detail.title}</h2>
                <p className="text-md text-slate-700">
                    {detail.description}
                </p>
                <div className="flex flex-row justify-between">
                    <div>
                        <div className="inline-flex items-center text-slate-700">
                            <span className="mr-2"><BsCalendarCheck /></span>
                            <span>{detail.createdDate}</span>
                        </div>
                        <button className="text-primary mx-2"><AiOutlineEdit /></button>
                        <button className="text-primary"><AiOutlineDelete /></button>
                    </div>
                    <div>
                        <div className="badge badge-primary text-white">{detail.status}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TaskCard;