import React, { useEffect, useRef, useState } from 'react';
import "./Home.css";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

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
                <div ref={sidebarRef} className="sidebar sidebar-open">
                    <div className="drawer drawer-mobile">
                        <input id="task-manager-sidebar" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-side">
                            <label htmlFor="task-manager-sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                <li>
                                    <Link className="hover:bg-primary" to="/">Dashboard</Link>
                                    <Link to="/all-task">All Task</Link>
                                    <Link to="/pending-task">Pending Task</Link>
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