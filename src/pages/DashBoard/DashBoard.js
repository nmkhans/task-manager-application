import React from 'react';
import { useSelector } from "react-redux";
import { useGetTaskStatsQuery } from "../../redux/api/apiSlice";
import Loading from './../../components/Loading/Loading';
import DashboardCard from './../../components/DasboardCard/DashboardCard';
import NotAvailable from './../../components/NotAvailable/NotAvailable';

const DashBoard = () => {
    const user = useSelector(state => state?.user?.user);
    const { data, isLoading, } = useGetTaskStatsQuery(user?.email);

    if (isLoading) return <Loading />

    return (
        <>
            {(data?.data?.length !== 0) ? (
                <div className="h-screen py-5 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
                    {data?.data?.map(detail => <DashboardCard key={detail._id} detail={detail} />)}
                </div>
            ) : (
                <NotAvailable />
            )}
        </>
    );
};

export default DashBoard;