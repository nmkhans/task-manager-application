import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useUploadImageMutation } from '../../redux/api/apiSlice';

const Register = () => {
    const [uploadImage] = useUploadImageMutation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const img = data.image[0];
        const formData = new FormData();
        formData.append("image", img);
        const imageUrl = await uploadImage(formData)
        console.log(imageUrl)

    }

    return (
        <div className="bg-base-200 flex items-center justify-center py-10">
            <div className="card w-2/4 bg-base-100 shadow-xl py-10 px-5">
                <h2 className="text-center text-2xl font-semibold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="input input-bordered w-full my-1"
                            {...register("firstName")}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="input input-bordered w-full my-1"
                            {...register("lastName")}
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input input-bordered w-full my-1"
                            {...register("email")}
                        />
                        <input
                            type="number"
                            placeholder="Phone Number" className="input input-bordered w-full my-1"
                            {...register("phone")}
                        />
                        <input
                            type="password"
                            placeholder="Password" className="input input-bordered w-full my-1"
                            {...register("password")}
                        />
                        <input
                            type="file"
                            className="input input-bordered w-full my-1 p-2"
                            {...register("image")}
                        />

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