import React, { useRef } from 'react';
import "./Home.css";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import LinkTo from '../../components/LinkTo/LinkTo';
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";


const Home = () => {
    const sidebarRef = useRef(null);
    const sideBar = useSelector((state) => state.sidebar.value);

    if (sideBar) {
        sidebarRef?.current?.classList.remove("sidebar-close");
        sidebarRef?.current?.classList.add("sidebar-open");
    } else {
        sidebarRef?.current?.classList.remove("sidebar-open");
        sidebarRef?.current?.classList.add("sidebar-close");
    }

    return (
        <div className="Home pt-1">
            <div className="flex flex-row">
                <div ref={sidebarRef} className="sidebar sidebar-close">
                    <div className="drawer drawer-mobile">
                        <input id="task-manager-sidebar" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-side">
                            <label htmlFor="task-manager-sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                <li>
                                    <LinkTo to="/">
                                        <span>
                                            <MdOutlineDashboard />
                                        </span>
                                        Dashboard
                                    </LinkTo>
                                    <LinkTo to="/all-task">
                                        <span>
                                            <AiOutlineEdit />
                                        </span>
                                        All Task
                                    </LinkTo>
                                    <LinkTo to="/pending-task">
                                        <span>
                                            <GiSandsOfTime />
                                        </span>
                                        Pending Task
                                    </LinkTo>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-base-200 grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;