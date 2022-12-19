import React from 'react';

const HeaderProfile = () => {
    return (
        <>
            <li>
                <div className="relative">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" alt="profile" />
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default HeaderProfile;