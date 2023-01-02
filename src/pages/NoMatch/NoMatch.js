import React from 'react';
import sadImg from "../../assets/sad-emoji.svg";

const NoMatch = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="text-center w-full">
                <img className="w-[200px] m-auto" src={sadImg} alt="" />
            </div>
            <div className="text-center">
                <h2 className="text-[100px] text-primary">404</h2>
                <h3 className="text-[20px] text-slate-700">Page not found!</h3>
            </div>
        </div>
    );
};

export default NoMatch;