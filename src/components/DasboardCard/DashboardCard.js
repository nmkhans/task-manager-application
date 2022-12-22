import React from 'react';
import { motion } from "framer-motion";

const DashboardCard = ({ detail }) => {
    return (
        <motion.div
            className="card bg-base-100 shadow-xl"
            initial={{opacity: 0, scaleY: 0, translateY: 200}}
            animate={{opacity: 1, scaleY: 1, translateY: 0}}
            transition={{duration: .5}}
        >
            <div className="card-body">
                <h2 className="text-xl text-slate-700 font-semibold">{detail._id.toUpperCase()}</h2>
                <h3 className="text-lg text-slate-700">{detail.sum}</h3>
            </div>
        </motion.div>
    );
};

export default DashboardCard;