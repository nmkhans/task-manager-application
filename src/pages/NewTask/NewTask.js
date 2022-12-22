import React from 'react';
import { useSelector } from "react-redux";
import { useGetTasksQuery } from '../../redux/api/apiSlice';
import Loading from './../../components/Loading/Loading';
import TaskCard from './../../components/TaskCard/TaskCard';

const NewTask = () => {
    const user = useSelector(state => state.user.user);
    const taskData = {
        email: user?.email,
        status: "new"
    }
    const {data, isLoading, error} = useGetTasksQuery(taskData);

    if(isLoading) return <Loading />

    return (
        <div className="py-5 px-10">
            <div className="mb-5">
                <h2 className="text-2xl text-slate-700 font-semibold">New Task</h2>
            </div>
            <div className="grid grid-cols-3 gap-[50px]">
                {data.data.map(detail => <TaskCard key={detail._id} detail={detail} />)}
            </div>
        </div>
    );
};

export default NewTask;