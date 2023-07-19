import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import QuantitySelection from '~/components/DetailProduct/QuantitySelection';
import OtherProduct from './OtherProduct';
import Header from '~/components/Home/Header';
import Footer from '~/components/Home/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '~/state/AuthReducer';

const DetailProduct = ({}) => {
    const userToken = useSelector((state) => state.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [product, SetProduct] = useState({});
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const { productId } = useParams();

    useEffect(() => {
        axios
            .get(`/products/${productId}`)
            .then((res) => {
                SetProduct(res.data.product);
            })
            .catch((err) => {
                console.log('error: ', err);
            });
    }, [productId]);

    const handleQuantityChange = (newQuantity) => {
        setSelectedQuantity(newQuantity);
    };
    const handleBuyNow = () => {
        if (userToken) {
            setIsOverlayActive(true)
        } else {
            navigate('/signin');
        }
    };
    return (
        <>
            <Header />

            <div className="mt-48 max-w-7xl bg-white rounded-md m-2 ">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full aspect-square">
                        <img className="" src={product.imageUrl ? product.imageUrl : ''} alt="" />
                    </div>
                    <div className="m-4 flex flex-col gap-3">
                        <h3 className=" font-bold opacity-75 text-2xl">
                            {product.sale !== 0 && (
                                <span className=" text-xl font-light bg-orange-200 text-orange-600 p-1">
                                    {product.sale}% GIẢM{' '}
                                </span>
                            )}
                            {product?.title}
                        </h3>
                        <div className="flex flex-row gap-6">
                            <p className="text-xl text-orange-500">{(product?.material + '').capitalize()}</p>
                            <p className="text-xl opacity-60">Đã bán {product?.sold}</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="text-xl line-through opacity-60 mt-auto">
                                <span className=" text-base underline mt-1">đ</span>
                                {product?.price}
                            </p>
                            <p className="text-3xl font-medium text-orange-600">
                                <span className="text-orange-600 text-base underline mb-auto">đ</span>
                                {(product?.price / 100) * (100 - product?.sale)}
                            </p>
                        </div>
                        <h3 className=" text-2xl font-bold opacity-75">Mô tả sản phẩm </h3>
                        <p className=" text-xl opacity-75">{product?.description}</p>

                        <div className="flex flex-row gap-4">
                            <p className="opacity-75">Qty:</p>
                            <QuantitySelection
                                initialQuantity={selectedQuantity}
                                onQuantityChange={handleQuantityChange}
                            />
                        </div>
                        <div className="w-3/4 mx-auto m-2 flex flex-row gap-6">
                            <button className="w-1/2 text-center text-white py-2 flex flex-row border rounded-md border-orange-600 bg-[#ff57221a] justify-center items-center gap-2">
                                <svg
                                    className="w-12 h-12 stroke-orange-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                                <span
                                    onClick={() => {
                                        dispatch(
                                            addToCart({
                                                _id: product._id,
                                                title: product.title,
                                                imageUrl: product.imageUrl,
                                                price: product.price,
                                                quantity: selectedQuantity,
                                            }),
                                        );
                                        navigate('/cart');
                                    }}
                                    className=" text-orange-600 "
                                >
                                    Thêm vào giỏ hàng
                                </span>
                            </button>
                            <button
                                onClick={() => handleBuyNow()}
                                className="w-48 text-center bg-orange-600 text-white py-6 rounded-md"
                            >
                                Mua ngay
                            </button>
                        </div>
                    </div>
                </div>
                <OtherProduct category={product.category} productId={product._id} />
            </div>

            <Footer />
            {isOverlayActive && (
                <div>
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                            &#8203;
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div>
                                    <div
                                        onClick={() => {
                                            setIsOverlayActive(false);
                                        }}
                                        className="mx-auto flex items-center cursor-pointer justify-center h-12 w-12 rounded-full bg-red-100"
                                    >
                                        <svg
                                            className="h-6 w-6 text-red-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <h3 className="text-2xl leading-6 font-medium text-gray-900">
                                            bạn đã mua hàng thành công
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DetailProduct;
