import React, { useRef, useEffect } from 'react';
import "./Home.css";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { handleSidebarState } from "../../redux/state/sidebarSlice/sidebarSlice";
import keyHandler from './../../utilities/keyHandler/keyHandler';
import AppLinks from './../../components/AppLinks/AppLinks';
import { MdOutlineDashboard, MdDownloadDone } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";


const Home = () => {
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
                                <AppLinks
                                    path="/"
                                    name="Dashboard"
                                    Icon={MdOutlineDashboard}
                                />
                                <AppLinks
                                    path="/create-task"
                                    name="Create New"
                                    Icon={AiOutlineEdit}
                                />
                                <AppLinks
                                    path="/new-task"
                                    name="New Task"
                                    Icon={AiOutlineBars}
                                />
                                <AppLinks
                                    path="/pending-task"
                                    name="Pending"
                                    Icon={GiSandsOfTime}
                                />
                                <AppLinks
                                    path="/completed-task"
                                    name="Completed"
                                    Icon={MdDownloadDone}
                                />
                                <AppLinks
                                    path="/canceled-task"
                                    name="Canceled"
                                    Icon={CgCloseR}
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

export default Home;