import React from 'react';

const DashboardCard = ({detail}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl text-slate-700 font-semibold">{detail._id.toUpperCase()}</h2>
                    <h3 className="text-lg text-slate-700">{detail.sum}</h3>
                </div>
            </div>
    );
};

export default DashboardCard;