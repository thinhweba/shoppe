import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import axios from 'axios';
import DetailProduct from './pages/DetailProduct';
import Category from './pages/Category';
import { useSelector } from 'react-redux';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import Admin from './pages/Admin';
import AdminProductPage from './pages/Admin/AdminProductPage';
import AddProduct from './components/Admin/AddProduct';
Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
});

function App() {
    const _token = useSelector((state) => state.token);

    axios.defaults.baseURL = process.env.REACT_APP_BASE_ADDRESS;
    // axios.defaults.headers.common['Authorization'] = `Bearer ${_token}`;

    return (
        <div className="max-w-7xl mx-auto">
            {/* <div className="fixed top-0 right-0 left-0 h-[99px] bg-gradient-to-b from-orange-600 to-orange-500"></div> */}
            {/* <Header /> */}

            <Router>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/admin/product" element={<AdminProductPage />} />
                    <Route path="/admin/addproduct" element={<AddProduct />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:productId" element={<DetailProduct />} />
                    <Route path="/category/:categoryId" element={<Category />} />
                </Routes>
            </Router>

            {/* <Footer /> */}

            {/* <Home/> */}
            {/* <DetailProduct/> */}
        </div>
    );
}

export default App;
