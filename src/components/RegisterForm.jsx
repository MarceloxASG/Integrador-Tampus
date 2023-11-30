import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './context';

const RegisterForm = () => {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here using formData
        console.log(formData);
        // Example: setUser({ ...user, ...formData });
        // navigate('/Navegar');
    };

    return (
        <section className="min-h-screen bg-[#f5e5c2]">
            <div className="container h-full pl-16 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between pt-14">
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        {/* Your logo here */}
                    </div>

                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12 ">
                        <form onSubmit={handleSubmit}>
                            <div className="text-4xl font-mono text-center mb-7">Registro</div>
                            <div className="relative mb-6">
                                <p className="mb-3">First Name</p>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="peer block min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="relative mb-6">
                                <p className="mb-3">Last Name</p>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="peer block min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                                    placeholder="Last Name"
                                />
                            </div>

                            <div className="relative mb-6">
                                <p className="mb-3">Email Address</p>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="peer block min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="relative mb-6">
                                <p className="mb-3">Password</p>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="peer block min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="relative mb-6">
                                <p className="mb-3">Confirm Password</p>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="peer block min-h-[auto] w-full rounded bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <div className="mb-6 flex items-center justify-between">
                                {/* Remember me checkbox */}
                            </div>

                            <Link to="/Navegar">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-md focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-md dark:shadow-xl dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >
                                    Register
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;
