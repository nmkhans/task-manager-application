import React, { useState } from 'react';
import { BsListTask, BsLayoutSidebarInset } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleSidebarState } from '../../redux/state/sidebarSlice/sidebarSlice';
import ProfileDetail from './../ProfileDetail/ProfileDetail';

const Header = ({ children }) => {
    const [profile, setProfile] = useState(false);
    const [mobileProfile, setMobileProfile] = useState(false);
    const dispatch = useDispatch()

    const handleSideBar = () => {
        dispatch(handleSidebarState())
    }

    function NavItems() {
        return (
            <>
                <li>
                    <div className="relative">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" alt="profile" />
                            </div>
                        </div>
                    </div>
                </li>
            </>
        )
    }

    return (
        <div className="Header">
            <div className="drawer drawer-end">
                <input id="task-manager-header" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-100 shadow-md">
                        <div>
                            <label onClick={handleSideBar} htmlFor="task-manager-sidebar" className="drawer-button cursor-pointer text-2xl ml-5 mr-3">
                                <BsLayoutSidebarInset />
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <Link className="flex" to="/">
                                <span className="text-primary mr-3 border-2 border-primary font-bold p-1 rounded-md inline-block"><BsListTask /></span>
                                <h3 className="inline-block font-bold text-xl">Task Manager</h3>
                            </Link>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="task-manager-header" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul onMouseOver={() => setProfile(true)}
                            onMouseOut={() => setProfile(false)} className="menu menu-horizontal mr-10 relative">
                                <NavItems />
                                {profile && (
                                    <div className="absolute top-[100%] right-[-30%]">
                                        <ProfileDetail />
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="task-manager-header" className="drawer-overlay"></label>
                    <ul onClick={() => setMobileProfile(!mobileProfile)} className="menu p-4 w-80 bg-base-100 relative">
                        <NavItems />
                        {mobileProfile && <ProfileDetail />}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;