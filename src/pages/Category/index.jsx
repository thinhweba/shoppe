import SortingAndPaging from '~/components/Category/SortingAndPaging';
import Header from '~/components/Home/Header';
import Footer from '~/components/Home/Footer';
const Category = ({}) => {
    return (
        <>
            <Header />
            <div className="mt-48">
                <SortingAndPaging />
            </div>
            <Footer />
        </>
    );
};
export default Category;
