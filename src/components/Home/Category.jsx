import { useNavigate } from 'react-router-dom';
const Category = ({}) => {
    const navigate = useNavigate();

    const navigateCategory = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };

    const categoryList = [
        {
            imgPath: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
            categoryId: 'manfashion',
            categoryName: 'Thời Trang Nam',
        },
        {
            imgPath: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
            categoryId: 'phone',
            categoryName: 'Điện Thoại & Phụ Kiện',
        },
        {
            imgPath: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
            categoryId: 'electronic',
            categoryName: 'Thiết Bị Điện Tử',
        },
        {
            imgPath: 'https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
            categoryId: 'laptop',
            categoryName: 'Máy Tính & Laptop',
        },
        {
            imgPath: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
            categoryId: 'laptop',
            categoryName: 'Giày Dép Nam',
        },
        {
            imgPath: 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn',
            categoryId: 'vehicle',
            categoryName: 'Ô Tô & Xe Máy & Xe Đạp',
        },
        {
            imgPath: 'https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn',
            categoryId: 'monandbaby',
            categoryName: 'Mẹ & Bé',
        },
        {
            imgPath: 'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn',
            categoryId: 'book',
            categoryName: 'Nhà Sách Online',
        },
        {
            imgPath: 'https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
            categoryId: 'womanfashion',
            categoryName: 'Thời Trang Nữ',
        },
    ];
    return (
        <div className=" bg-white mt-6 p-3">
            <div className=" text-gray-400 mt-2 ml-2 border-b border-gray-300">Danh Mục</div>
            <div className="flex flex-row gap-5 pt-6 overflow-auto custom_scroll">
                {categoryList.map((category, index) => {
                    return (
                        <div
                            className=" min-w-[70px] cursor-pointer w-[11.11%]"
                            key={index}
                            onClick={() => navigateCategory(category.categoryId)}
                        >
                            <img className="w-16 h-16 mx-auto" src={category.imgPath} alt={category.categoryName} />
                            <h3 className=" text-base text-center ">{category.categoryName}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Category;
