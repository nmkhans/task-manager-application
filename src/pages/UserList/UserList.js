import React from 'react';
import UserRow from '../../components/UserRow/UserRow';
import { useGetUsersQuery } from '../../redux/api/apiSlice';
import Loading from './../../components/Loading/Loading';

const UserList = () => {
    const { data, isLoading } = useGetUsersQuery();
    const users = data?.data;

    if(isLoading) return <Loading />

    return (
        <div className="py-5 px-10 bg-base-200">
            <div className="mb-10">
                <h2 className="text-2xl text-slate-700 font-semibold">All user</h2>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map(user => <UserRow
                                id={user._id}
                                user={user}
                            />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;