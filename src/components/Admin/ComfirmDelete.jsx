import axios from 'axios';
import { useSelector } from 'react-redux';

const ComfirmDelete = ({ openState, productName, productId, removeProducts }) => {
    const _token = useSelector((state) => state.token);
    const config = {
        headers: { Authorization: `Bearer ${_token}` },
    };

    const HandleDeleteProduct = async () => {
        console.log(_token);
        try {
            await axios.delete(`/products/${productId}`, config);
            removeProducts(productId);
        } catch (error) {
            console.log('error delete', error?.message);
        }
    };

    return (
        <div className=" fixed inset-0 bg-slate-300 z-30 bg-opacity-50 flex items-center justify-center">
            <div className="flex absolute w-10/12 md:w-3/4 rounded-xl bg-white ">
                <div className=" m-6 w-full">
                    <div className="">
                        <h3 className=" font-semibold">Tên sản phẩm: {productName}</h3>
                        <p className="">Id: {productId}</p>
                    </div>
                    <div className="flex flex-row gap-4 justify-center ">
                        <button
                            className="  w-16 text-center bg-orange-600 text-white py-2 rounded-md"
                            onClick={() => {
                                openState(false);
                            }}
                        >
                            Hủy
                        </button>
                        <button
                            className=" w-16 text-center bg-orange-600 text-white py-2 rounded-md"
                            onClick={() => {
                                HandleDeleteProduct();
                                openState(false);
                            }}
                        >
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComfirmDelete;
