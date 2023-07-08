const Utilities = ({}) => {
    const UtilitiesList = [
        {imgPath: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi', utilitiName: 'Khung Giờ Săn Sale'},
        {imgPath: 'https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi', utilitiName: 'Miễn Phí Ship - Có Shopee'},
        {imgPath: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi', utilitiName: 'Voucher Giảm Đến 200.000Đ'},
        {imgPath: 'https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi', utilitiName: 'Hàng Hiệu Outlet Giảm 50%'},
        {imgPath: 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi', utilitiName: 'Mã Giảm Giá'},
        {imgPath: 'https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi', utilitiName: 'Bắt Trend - Giá Sốc'},
        {imgPath: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi', utilitiName: 'Nạp Thẻ, Dịch Vụ & VinWonders'},
        {imgPath: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi', utilitiName: 'Hàng Quốc Tế'},
        {imgPath: 'https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi', utilitiName: 'Gì Cũng Rẻ - Mua Là Freeship'}
    ]

    return (
        <div className=" flex flex-row gap-5 pt-6 overflow-x-auto overflow-y-hidden custom_scroll h-fit">
            {UtilitiesList.map((utility, index) => {
                return (
                    <div className=" min-w-[70px] h-fit w-[11.11%]" key={index}>
                        <img className=" w-16 h-16 mx-auto" src={utility.imgPath} alt={utility.utilitiName} />
                        <h3 className=" text-base text-center">{utility.utilitiName}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Utilities;