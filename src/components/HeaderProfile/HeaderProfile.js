import React from 'react';
import { useSelector } from 'react-redux';

const HeaderProfile = () => {
    const user = useSelector(state => state.user.user);
    
    return (
        <>
            <li>
                <div className="relative">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.image} alt="profile" />
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default HeaderProfile;