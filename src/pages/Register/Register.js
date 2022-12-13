import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="bg-base-200 flex items-center justify-center py-10">
            <div className="card w-2/4 bg-base-100 shadow-xl py-10 px-5">
                <h2 className="text-center text-2xl font-semibold">Sign Up</h2>
                <form>
                    <div className="card-body">
                        <input type="text" placeholder="First Name" className="input input-bordered w-full my-1" />
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full my-1" />
                        <input type="email" placeholder="Email Address" className="input input-bordered w-full my-1" />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full my-1" />
                        <input type="password" placeholder="Password" className="input input-bordered w-full my-1" />
                        <input type="file" className="input input-bordered w-full my-1 p-2" />
                        <div className="card-actions mt-3 justify-center">
                            <button type="submit" className="btn btn-primary w-full text-white">Submit</button>
                            <span className="mt-3 text-slate-500">
                                <Link to="/login">Sign In</Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;