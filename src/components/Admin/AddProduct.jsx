import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
const AddProduct = ({}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState(0);
    const [category, setCategory] = useState('');
    const [imageUrl, setImage] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [sold, setSold] = useState(0);


    const navigate = useNavigate();

    const _token = useSelector((state) => state.token);

    // console.log(_token);

    const handleSubmit = (event) => {

        event.preventDefault();

    
            const newProduct = {
                title,
                price,
                sale,
                category,
                imageUrl,
                quantity,
                description,
                sold,
            };
    
            const config = {
                headers: { Authorization: `Bearer ${_token}` },
            };
    
            axios.post('/products/', newProduct, config).then((res) => {
                console.log(res);
                navigate('/admin/product');
            });
        
    }
    return (
        <> 
        <Header/> 
        <div className="w-full max-w-md mx-auto text-xl mt-48 mb-12">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Title
                    </label>
                    <input
                        required
                        type="text"
                        id="title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Enter title"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Price
                    </label>
                    <input
                        required
                        type="number"
                        id="price"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        placeholder="Enter price"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sale" className="block text-gray-700 font-bold mb-2">
                        Sale
                    </label>
                    <input
                        required
                        type="number"
                        id="sale"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={sale}
                        onChange={(event) => setSale(event.target.value)}
                        placeholder="Enter sale status"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                        Category
                    </label>
                    <input
                        required
                        type="text"
                        id="category"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        placeholder="Enter category"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                        Image
                    </label>
                    <input
                        required
                        type="text"
                        id="image"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={imageUrl}
                        onChange={(event) => setImage(event.target.value)}
                        placeholder="Enter image URL"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
                        Quantity
                    </label>
                    <input
                        required
                        type="number"
                        id="quantity"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                        placeholder="Enter quantity"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Description
                    </label>
                    <input
                        required
                        type="text"
                        id="description"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="Enter description"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sold" className="block text-gray-700 font-bold mb-2">
                        Sold
                    </label>
                    <input
                        required
                        type="number"
                        id="sold"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={sold}
                        onChange={(event) => setSold(event.target.value)}
                        placeholder="Enter sold status"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <Footer/>
        </>
    );
};
export default AddProduct;
