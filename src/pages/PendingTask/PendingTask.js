import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useGetTasksQuery } from '../../redux/api/apiSlice';
import Loading from './../../components/Loading/Loading';
import TaskCard from './../../components/TaskCard/TaskCard';
import { removeUser } from "../../redux/state/userSlice/userSlice";
import { useNavigate } from 'react-router-dom';
import StatusModal from './../../components/StatusModal/StatusModal';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import NotAvailable from './../../components/NotAvailable/NotAvailable';

const PendingTask = () => {
    const [taskInfo, setTaskInfo] = useState({});
    const user = useSelector(state => state.user.user);
    const taskData = {
        email: user?.email,
        status: "pending"
    }
    const { data, isLoading, error } = useGetTasksQuery(taskData);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (error?.status === 403) {
        dispatch(removeUser());
        navigate("/login")
    }

    return (
        <div className="py-5 px-10">
            <div className="mb-10">
                <h2 className="text-2xl text-slate-700 font-semibold">Pending Task</h2>
            </div>
            {
                (data?.data?.length !== 0) ? (
                    <div className="grid grid-cols-3 gap-[50px]">
                        {data?.data?.map(detail => <TaskCard key={detail._id} detail={detail} setTaskInfo={setTaskInfo} />)}
                    </div>
                ) : (
                    <NotAvailable />
                )
            }
            <StatusModal taskInfo={taskInfo} />
            <DeleteModal taskInfo={taskInfo} />
        </div>
    );
};

export default PendingTask;