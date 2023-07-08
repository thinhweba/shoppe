import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = ({ openState, product, replaceProduct }) => {
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [sale, setSale] = useState(product.sale);
    const [category, setCategory] = useState(product.category);
    const [imageUrl, setImage] = useState(product.imageUrl);
    const [quantity, setQuantity] = useState(product.quantity);
    const [description, setDescription] = useState(product.description);
    const [sold, setSold] = useState(product.sold);

    const _token = useSelector((state) => state.token);
    const navigate = useNavigate();
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

        axios
            .put(`/products/${product._id}`, newProduct, config)
            .then((res) => {
                // console.log(res.data.newProduct);
                replaceProduct(res.data.newProduct);
                openState(false);
            })
            .catch((error) => {
                console.log(error);
                openState(false);
                navigate('/signin');
            });
    };

    return (
        <div className=" fixed inset-0 bg-slate-300 z-30 bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col absolute w-10/12 md:w-3/4 rounded-xl bg-white h-[80%] overflow-auto p-2">
                <div className="flex flex-row justify-between">
                    <h3>Update Product</h3>
                    <svg
                        className="w-6 h-6 p-3 box-content cursor-pointer hover:bg-slate-300 rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => {
                            openState(false);
                        }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <form onSubmit={handleSubmit} className="bg-white rounded w-full px-8 pt-6 pb-8 mb-4">
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
                            Save Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
