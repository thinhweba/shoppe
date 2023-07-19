import Header from '~/components/Home/Header';
import Footer from '~/components/Home/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { decreamentQuantity, deleteItem, increamentQuantity, resetCart } from '~/state/AuthReducer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Cart = ({}) => {
    const products = useSelector((state) => state.productData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let total = 0;
        products.map((product) => {
            total = product.price * product.quantity;
            return total;
        });
        setTotalPrice(total);
    }, [products]);

    return (
        <>
            <Header />
            <div className="flex flex-col gap-8 pt-48">
                <div className="flex gap-5 items-center border border-yellow-300 justify-center ">
                    <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/74f3e9ac01da8565c3baead996ed6e2a.png"
                        alt="logo"
                    />
                    <span className="">Chọn phiếu giảm giá để vận chuyển miễn phí bên dưới để được giảm giá </span>
                </div>
                {products.length > 0 ? (
                    <div>
                        {products.map((product) => {
                            return (
                                <div key={product._id} className="flex gap-4 flex-col lg:flex-row lg:gap-8 px-4">
                                    <div className="flex gap-3 ">
                                        <div className="flex gap-4">
                                            <img className="w-36" src={product.imageUrl} alt="" />
                                            <span className="lg:w-fit ">{product.title}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center justify-around lg:gap-4">
                                        <div className="flex flex-row items-center justify-center gap-2">
                                            <div className="flex items-center justify-between text-gray-500 gap-4 border p-4">
                                                <p className="text-2xl">Quantity</p>
                                                <div className="flex items-center gap-4 text-xl font-semibold">
                                                    <span
                                                        onClick={() => {
                                                            dispatch(
                                                                decreamentQuantity({
                                                                    _id: product._id,
                                                                    title: product.title,
                                                                    imageUrl: product.imageUrl,
                                                                    price: product.price,
                                                                    quantity: 1,
                                                                }),
                                                            );
                                                        }}
                                                        className="border h-5 font-normal text-2xl flex items-center justify-center p-4 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                                    >
                                                        -
                                                    </span>
                                                    {product.quantity}
                                                    <span
                                                        onClick={() => {
                                                            dispatch(
                                                                increamentQuantity({
                                                                    _id: product._id,
                                                                    title: product.title,
                                                                    imageUrl: product.imageUrl,
                                                                    price: product.price,
                                                                    quantity: 1,
                                                                }),
                                                            );
                                                        }}
                                                        className="border h-5 font-normal text-2xl flex items-center justify-center p-4 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                                    >
                                                        +
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <span className="text-2xl font-semibold w-full">
                                            {product.price * product.quantity} D
                                        </span>
                                        <span
                                            onClick={() => {
                                                dispatch(deleteItem(product._id));
                                            }}
                                            className="text-red-500 text-2xl cursor-pointer"
                                        >
                                            Delete
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="m-4">
                        <img className="w-fit mx-auto" src="https://iticsystem.com/img/empty-cart.png" alt="" />
                        <button
                            onClick={() => {navigate("/")}}
                            className="flex gap-2 items-center text-white bg-orange-500 p-4 mt-4"
                        >
                            Go shopping
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
            <div className="flex justify-around p-8 items-center shadow-md mt-8">
                <div className="flex gap-8">
                    <span
                        onClick={() => {
                            dispatch(resetCart());
                        }}
                        className="hover:text-orange-500 cursor-pointer"
                    >
                        Delete All
                    </span>
                </div>
                <div className="flex items-center gap-4 ">
                    <span className="">Total: </span>
                    <span className="font-semibold">{totalPrice}D</span>
                </div>
                <button className="text-white bg-orange-500 p-4 ">Thanh toán</button>
            </div>
            <Footer />
        </>
    );
};
export default Cart;
