import React from 'react';
import image from "../../assets/not_available.svg";

const NotAvailable = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[400px]">
                <img src={image} alt="Task Not Available" />
            </div>
            <div>
                <h2 className="text-2xl text-slate-700 font-bold">No Task Available!</h2>
                <p className="text-lg text-slate-700 font-normal -ml-10">Create your tasks and show on lists...</p>
            </div>
        </div>
    );
};

export default NotAvailable;