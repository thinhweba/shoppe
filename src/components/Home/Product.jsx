import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    // console.log(product);
    const navigate = useNavigate();
    return (
        <div
            className="w-1/2 md:w-1/4 lg:w-1/6 bg-white border-4 cursor-pointer hover:border hover:border-orange-500 relative group/product"
            onClick={() => {
                navigate(`/product/${product._id}`);
            }}
        >
            <img className="aspect-square" src={product.imageUrl} alt={product.title} />
            <div className="p-4">
                <h1 className="twolinesetting text-xl">{product.title}</h1>
                <div
                    className={`${!product.sale > 0 ? 'invisible' : ''} bg-orange-300 text-white w-fit px-2 text-base`}
                >
                    {product.sale}% Giảm
                </div>
                <div className="place-content-between">
                    <span className=" text-orange-800 text-xl">
                        <span className=" text-orange-800 text-base underline mt-1">đ</span>
                        {product.price}
                    </span>
                    <span className=" text-base opacity-70 float-right">Đã bán {product.sold}</span>
                </div>
            </div>
            <div className=" hidden absolute text-base text-white bg-orange-500 z-20 w-full text-center p-1 rounded-b-md group-hover/product:block">
                Tìm sản phẩm tương tự
            </div>
        </div>
    );
};
export default Product;
