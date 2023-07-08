const Header = ({}) => {
    const signIn = () => {
        window.location.assign('/signin');
        // navigate('/signin');
    };

    const signUp = () => {
        window.location.assign('/signup');
    };

    const adMin = () => {
        window.location.assign('/admin');
    };
    return (
        <>
            <div className="fixed top-0 right-0 left-0 h-[99px] bg-gradient-to-b from-orange-600 to-orange-500"></div>

            <div className=" h-fit w-full max-w-7xl flex flex-col fixed top-0 z-10 bg-gradient-to-b from-orange-600 to-orange-500">
                <div className=" flex flex-row text-xl text-white place-content-between mx-4 mt-2">
                    <div className="flex flex-row gap-6">
                        <span className=" cursor-pointer" onClick={adMin}>
                            Kênh người bán{' '}
                        </span>
                        <span className=" cursor-pointer">Tải ứng dụng</span>
                    </div>
                    <div className="flex flex-row gap-6">
                        <span className=" cursor-pointer">Thông báo</span>
                        <span className=" cursor-pointer">Hỗ trợ</span>
                        <span className=" cursor-pointer" onClick={signUp}>
                            Đăng ký
                        </span>
                        <span className=" cursor-pointer" onClick={signIn}>
                            Đăng nhập
                        </span>
                    </div>
                </div>
                <div className="flex flex-row pt-4 gap-6 px-3 pb-3 ">
                    <a href="/">
                        <img className="h-[50px] cursor-pointer" src="./img/logoshopee.png" alt="logoshoppe" />
                    </a>
                    <div className="flex-1 relative rounded-md">
                        <input
                            className=" rounded-md w-full focus:outline-none h-[34px] p-1 pr-0 box-content"
                            type="text"
                            placeholder="Điện thoại Iphone 14 pro max"
                        />
                        <button className="rounded-md absolute top-0 right-0  h-[34px] bg-orange-500 mt-1 w-[60px]">
                            <svg
                                className="w-6 h-6 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                        <div className=" flex flex-row gap-4 pt-2">
                            <a href="" className="text-base text-white">
                                Điện thoại 1k
                            </a>
                            <a href="" className="text-base text-white">
                                Lighstick Backpink
                            </a>
                            <a href="" className="text-base text-white">
                                Dép
                            </a>
                            <a href="" className="text-base text-white">
                                Iphone 14 Pro Max
                            </a>
                        </div>
                    </div>
                    <button className=" w-14">
                        <svg
                            className="w-10 aspect-square"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
