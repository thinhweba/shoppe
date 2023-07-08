import { useEffect, useState } from 'react';
import ProductAdmin from '~/components/Admin/ProductAdmin';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';
import Header from '~/components/Home/Header';
import Footer from '~/components/Home/Footer';
const AdminProductPage = ({}) => {
    const [products, SetProducts] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1);
    const [totalPage, SetTotalPage] = useState();

    useEffect(() => {
        axios
            .get(`/products/?_page=${currentPage}`)
            .then((res) => {
                SetTotalPage(res.data.pagination.total);
                SetProducts(res.data.products);
            })
            .catch((error) => {
                console.log('error get products: ', error);
            });
    }, [currentPage]);

    const removeProducts = (productId) => {
        SetProducts((prev) => {
            return prev.filter((z) => z._id !== productId);
        });
    };

    const replaceProduct = (newProduct) => {
        SetProducts((prev) => {
            const products = prev.filter((z) => z._id !== newProduct._id);
            return [...products, newProduct];
        });
    };

    return (
        <>
            <Header />
            <div className="">
                <div className="">
                    {products.map((product) => {
                        return (
                            <ProductAdmin
                                key={product._id}
                                product={product}
                                removeProducts={removeProducts}
                                replaceProduct={replaceProduct}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-center mt-4">
                    <Pagination
                        count={totalPage}
                        variant="outlined"
                        shape="rounded"
                        onChange={(_, page) => {
                            SetCurrentPage(page);
                        }}
                        page={currentPage}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};
export default AdminProductPage;
