import React from 'react';
import { useSelector } from "react-redux";
import { useGetTaskStatsQuery } from "../../redux/api/apiSlice";
import Loading from './../../components/Loading/Loading';
import DashboardCard from './../../components/DasboardCard/DashboardCard';

const DashBoard = () => {
    const user = useSelector(state => state?.user?.user);
    const { data, isLoading, } = useGetTaskStatsQuery(user?.email);

    if (isLoading) return <Loading />

    return (
        <div className="py-5 px-10 grid grid-cols-3 gap-[50px]">
            {data?.data?.map(detail => <DashboardCard key={detail._id} detail={detail} />)}
        </div>
    );
};

export default DashBoard;