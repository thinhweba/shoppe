import React from 'react';
import Footer from '~/components/Home/Footer';

export const SignUp = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className=" top-0 right-0 left-0 h-[99px] bg-white flex flex-row justify-between">
                    <div className=" flex items-center">
                        <img
                            className=" flex justify-center h-[50px] cursor-pointer"
                            src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-digital-economy-forum-mdcc-1.png"
                            alt="logo"
                        />
                        <span className="my-auto text-3xl font-medium">ĐĂNG NHẬP </span>
                    </div>
                    <div className=" m-10 flex justify-center items-center">
                        <span className=" text-orange-500 cursor-pointer "> Bạn cần giúp đỡ ?</span>
                    </div>
                </div>

                <div className="flex justify-center items-center pt-12 bg-gray-100">
                    <form className="bg-white p-10 rounded shadow-md w-full ">
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                Mật khẩu
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                nhập lại mật khẩu
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Đăng ký
                            </button>
                            <a className="inline-block align-baseline  text-2xl text-orange-500 " href="#">
                                Cần hỗ trợ?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
