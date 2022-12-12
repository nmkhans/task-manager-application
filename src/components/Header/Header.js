import React from 'react';
import { BsListTask } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {

    function NavItems() {
        return (
            <>
                <li>Image</li>
            </>
        )
    }

    return (
        <div className="Header">
            <div className="drawer drawer-end">
                <input id="task-manager-header" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-100 shadow-md">
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
                            <ul className="menu menu-horizontal mr-10">
                                <NavItems />
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="task-manager-header" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        <NavItems />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;