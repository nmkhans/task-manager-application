import React, { useEffect, useState } from 'react';
import { useGetTaskStatsQuery } from "../../redux/api/apiSlice";

const DashBoard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { data, isLoading } = useGetTaskStatsQuery(user.email);
    
    if(isLoading) return "loading..."
    console.log(data)
    

    return (
        <div className="py-5 px-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;