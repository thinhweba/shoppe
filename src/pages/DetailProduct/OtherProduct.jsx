import axios from 'axios';
import { useEffect, useState } from 'react';
import SameCategoryProduct from '~/components/DetailProduct/SameCategoryProduct';

const OtherProduct = ({ category, productId }) => {
    const [sameProductList, SetSameProductList] = useState([]);

    useEffect(() => {
        axios
            .get('products/category/' + category)
            .then((res) => {
                SetSameProductList(res.data?.products.filter((x) => x._id !== productId));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);

    return (
        <div>
            <div className=" opacity-60 bg-gray-200 pt-4 ">Sản Phẩm Khác</div>
            <div className='flex flex-row flex-wrap'>
                {sameProductList.map((product) => {
                    return <SameCategoryProduct key={product._id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default OtherProduct;
