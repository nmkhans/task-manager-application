import React, { useRef, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { handleSidebarState } from "../../redux/state/sidebarSlice/sidebarSlice";
import keyHandler from './../../utilities/keyHandler/keyHandler';
import AdminLinks from '../../components/AdminLinks/AdminLinks';
import { AiFillDashboard } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const Admin = () => {
    const sidebarRef = useRef(null);
    const sideBar = useSelector((state) => state.sidebar.value);
    const dispatch = useDispatch();

    if (sideBar) {
        sidebarRef?.current?.classList.remove("sidebar-close");
        sidebarRef?.current?.classList.add("sidebar-open");
    } else {
        sidebarRef?.current?.classList.remove("sidebar-open");
        sidebarRef?.current?.classList.add("sidebar-close");
    }

    useEffect(() => {
        keyHandler(sidebarRef, sideBar, dispatch, handleSidebarState)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="Home pt-1">
            <div className="flex flex-row relative">
                <div ref={sidebarRef} className="sidebar sidebar-close absolute md:relative z-[10]">
                    <div className="drawer drawer-mobile">
                        <input id="task-manager-sidebar" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-side">
                            <label htmlFor="task-manager-sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                <AdminLinks
                                    path="/admin"
                                    name="Dashboard"
                                    Icon={AiFillDashboard}
                                />
                                <AdminLinks
                                    path="/admin/user-list"
                                    name="User list"
                                    Icon={FiUsers}
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-base-200 grow h-screen">
                    <Outlet />
                </div>
            </div>
        </div >
    );
};

export default Admin;