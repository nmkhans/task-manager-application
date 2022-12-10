import React from 'react';
import { useGetAllTasksQuery } from '../../redux/api/apiSlice';

const Home = () => {
    const { data } = useGetAllTasksQuery();
    console.log(data)
    return (
        <div>
            this is home page
        </div>
    );
};

export default Home;