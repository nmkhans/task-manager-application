import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="Home pt-1">
            <div className="flex flex-row">
                <div>
                    <div className="drawer drawer-mobile">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
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