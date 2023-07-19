import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '~/components/Home/Footer';

export const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [conform, setConform] = useState('');
    const [email, setEmail] = useState('');

    const [userNameError, setUserNameError] = useState('');
    const [passWordError, setPassWordError] = useState('');
    const [conformError, setConformError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        if (!userName.trim()) {
            setUserNameError('Please enter your name');
            isValid = false;
        } else {
            setUserNameError('');
        }

        if (!email.trim()) {
            setEmailError('Please enter your email');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Please enter a valid email');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (passWord.length < 8) {
            setPassWordError('Password must be at least 8 characters');
            isValid = false;
        } else {
            setPassWordError('');
        }
        if (passWord !== conform) {
            setConformError('Passwords do not match');
            isValid = false;
        } else {
            setConformError('');
        }
        if (isValid) {
            const newUser = {
                username: userName,
                password: passWord,
                role: 'customer',
                email: email,
                image: '',
            };
            axios.post(`/auth/register`, newUser)
                .then((res) => {
                    console.log(res);
                    window.location.assign('/signin')
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

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
                        <span className="my-auto text-3xl font-medium">ĐĂNG KÝ </span>
                    </div>
                    <div className=" m-10 flex justify-center items-center">
                        <span className=" text-orange-500 cursor-pointer "> Bạn cần giúp đỡ ?</span>
                    </div>
                </div>

                <div className="flex justify-center items-center pt-12 bg-gray-100">
                    <form className="bg-white p-10 rounded shadow-md w-full ">
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Tên tài khoản
                                <span className='  ml-4  text-red-600 text-xl'>{userNameError}</span>
                            </label>
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                                type="text"
                                id="text"
                                name="text"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                                <span className='  ml-4  text-red-600 text-xl'>{emailError}</span>
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                id="text"
                                name="text"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                Mật khẩu
                                <span className='  ml-4  text-red-600 text-xl'>{passWordError}</span>
                            </label>
                            <input
                                onChange={(e) => setPassWord(e.target.value)}
                                value={passWord}
                                type="password"
                                id="password"
                                name="password"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                Nhập lại mật khẩu
                                <span className='  ml-4  text-red-600 text-xl'>{conformError}</span>
                            </label>
                            <input
                                onChange={(e) => setConform(e.target.value)}
                                value={conform}
                                type="password"
                                id="password"
                                name="password"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                onClick={(e) => handleSubmit(e)}
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
