import Header from '~/components/Home/Header';
import Slider from '~/components/Home/Slider';
import Utilities from '~/components/Home/Utilities';
import Category from '~/components/Home/Category';
import Footer from '~/components/Home/Footer';
import Product from '~/components/Home/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

function Home() {
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

    return (
        <div className="flex flex-col overflow-auto max-w-7xl mx-auto mt-48 ">
            <Header />
            <Slider />
            <Utilities />
            <div className=" bg-gray-100 flex-1">
                <Category />
                <div className=" text-center mt-8 py-6 text-orange-500 bg-white border-b-4 border-orange-600">
                    GỢI Ý HÔM NAY
                </div>
                <div className="flex flex-row flex-wrap">
                    {products.map((product) => {
                        return <Product product={product} key={product._id} />;
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
        </div>
    );
}

export default Home;
