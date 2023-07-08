import { useState } from 'react';
import ComfirmDelete from './ComfirmDelete';
import UpdateProduct from './UpdateProduct';

const ProductAdmin = ({ product, removeProducts, replaceProduct }) => {
    const [isDeletePanelOpen, SetDeletePanelOpen] = useState(false);
    const [isUpdatePanelOpen, SetUpdatePanelOpen] = useState(false);

    return (
        <div className="flex flex-row gap-4 bg-white p-4 rounded-xl m-4">
            <div className=" w-28">
                <img className=" w-full aspect-square" src={product?.imageUrl} alt="anh " />
            </div>
            <div className=" flex-1">
                <h1 className=" text-xl font-medium">{product.title}</h1>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-col text-xl">
                        <p className=" text-orange-500">Giảm giá: {product.sale}%</p>
                        <p className=" opacity-70">Đã bán: {product.sold}</p>
                    </div>
                    <div className=" text-xl">
                        <p className="">Giá: {product.price}</p>
                    </div>

                    <div className="flex flex-row gap-4 text-base">
                        {/* <button className="w-16 text-center bg-orange-600 text-white py-2 rounded-md ">Them</button> */}
                        <button
                            className="w-16 text-center bg-orange-600 text-white py-2 rounded-md "
                            onClick={() => {
                                SetDeletePanelOpen(true);
                            }}
                        >
                            Xoa
                        </button>
                        <button
                            className="w-16 text-center bg-orange-600 text-white py-2 rounded-md "
                            onClick={() => {
                                SetUpdatePanelOpen(true);
                            }}
                        >
                            Sua
                        </button>
                    </div>
                </div>
            </div>
            {isDeletePanelOpen && (
                <ComfirmDelete
                    openState={SetDeletePanelOpen}
                    productId={product._id}
                    productName={product.title}
                    removeProducts={removeProducts}
                />
            )}
            {isUpdatePanelOpen && (
                <UpdateProduct openState={SetUpdatePanelOpen} product={product} replaceProduct={replaceProduct} />
            )}
        </div>
    );
};

export default ProductAdmin;
