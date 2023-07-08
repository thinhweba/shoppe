import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '~/components/Home/Footer';
const Admin = () => {
    return (
        <>
            <div>
                <div className="bg-gray-100 h-screen">
                    <nav className="flex gap-8 items-center justify-between flex-wrap bg-orange-500 p-6">
                        <div className="flex items-center flex-shrink-0 text-white mr-6">
                            <span className="font-semibold text-3xl tracking-tight">Admin Panel</span>
                        </div>
                        <div className="  block lg:hidden">
                            <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400  hover:border-white">
                                <svg
                                    className="fill-current h-3 w-3"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full  block flex-grow lg:flex lg:gap-8 lg:items-center lg:w-auto">
                            <div className="text-xl text-white lg:flex-grow ">
                                <Link
                                    to="/admin/product"
                                    href="#responsive-header"
                                    className=" text-xl block mt-4 lg:inline-block lg:mt-0  mr-12"
                                >
                                    Product
                                </Link>
                                <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  mr-12">
                                    Order
                                </Link>
                                <Link
                                    to="/admin/addproduct"
                                    href="#responsive-header"
                                    className="block mt-4 lg:inline-block lg:mt-0  "
                                >
                                    AddProduct
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href="#responsive-header"
                                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <div className="container mx-auto mt-10">
                        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-lg font-bold mb-2">Users</h2>
                                <p className="text-gray-700">Total Users: 1000</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-lg font-bold mb-2">Orders</h2>
                                <p className="text-gray-700">Total Orders: 500</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-lg font-bold mb-2">Revenue</h2>
                                <p className="text-gray-700">Total Revenue: $10,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Admin;
