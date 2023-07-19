import React from 'react';

import Footer from '~/components/Home/Footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '~/state/AuthReducer';

export const SignIn = () => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const [signInError, SetSignInError] = React.useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const HandleSignIn = (e) => {
        e.preventDefault();
        // console.log(usernameRef.current.value);

        if (usernameRef.current.value && passwordRef.current.value) {
            let signInfo = { username: usernameRef.current.value, password: passwordRef.current.value };
            console.log(signInfo);

            axios.post('/auth/login', signInfo).then((res) => {
                // console.log(res.data.user);
                dispatch({
                    type: setToken,
                    payload: {
                        token: res.data.accessToken,
                        userId: res.data.user._id,
                        userName: res.data.user.username,
                    },
                });

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            });
        } else {
            SetSignInError('Usernam and password is required');
        }
    };

    return (
        <>
            <div className="flex flex-col">
                <div className=" top-0 right-0 left-0 h-[99px] bg-white flex flex-row justify-between">
                    <div className=" flex items-center">
                        <img
                            onClick={() => {navigate("/")}}
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
                    <form className="bg-white p-10 rounded shadow-md w-full">
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Username
                            </label>
                            <input
                                ref={usernameRef}
                                type="text"
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
                                ref={passwordRef}
                                type="password"
                                id="password"
                                name="password"
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        {signInError && <span className=" text-base text-red-600">{signInError}</span>}

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={(e) => {
                                    HandleSignIn(e);
                                }}
                            >
                                Đăng nhập
                            </button>
                            <a className="inline-block align-baseline  text-2xl text-orange-500 " href="#">
                                Quên mật khẩu?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
