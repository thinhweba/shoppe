import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Home/Product';
import Pagination from '@mui/material/Pagination';

const SortingAndPaging = ({}) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1);
    const [totalPage, SetTotalPage] = useState();

    useEffect(() => {
        axios
            .get(`/products/?_category=${categoryId}`)
            .then((res) => {
                SetTotalPage(res.data.pagination.total);
                setProducts(res.data.products);
            })
            .catch((error) => {
                console.error(`Cannot get all product from ${categoryId}: `, error);
            });
    }, [categoryId, currentPage]);

    return (
        <div className="flex flex-col justify-between">
            <div className="flex flex-row  gap-4 ">
                <p className="opacity-70 text-2xl my-auto ">Sắp xếp theo </p>
                <button className=" cursor-pointer w-36 h-12 bg-white h-200 hover:bg-red-500 group-hover:text-white text-2xl">
                    Phổ biến
                </button>
                <button className=" cursor-pointer w-36 h-12 bg-white h-200 hover:bg-red-500 group-hover:text-white text-2xl">
                    Mới nhất
                </button>
                <button className=" cursor-pointer w-36 h-12 bg-white h-200 hover:bg-red-500 group-hover:text-white text-2xl">
                    Bán chạy
                </button>
                <div className="text-center justify-between flex flex-row cursor-pointer w-72 h-12 bg-white h-200 hover:bg-red-500 group-hover:text-white">
                    <span className=" my-auto pl-2">Giá</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2 my-auto"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="flex flex-row gap-6">
                    <span className="my-auto"> 1/9</span>

                    <div className=" flex flex-row gap-24 cursor-pointer w-32 h-12 bg-white hover:bg-red-500 group-hover:text-white text-2xl">
                        <svg
                            className="w-6 h-6 my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 my-auto"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* PRODUCTS */}
            <div className="flex flex-row flex-wrap">
                {products.map((product) => (
                    <Product product={product} />
                ))}
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
    );
};
export default SortingAndPaging;
