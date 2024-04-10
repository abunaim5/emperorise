import Banner from "../../components/Banner/Banner";
import Header from "../../components/Common/Header/Header";
import Estate from "../../components/Estate/Estate";

const Home = () => {
    return (
        <div className="relative bg-[#F5F5DC]">
            <div className="bg-[#4B0082] bg-opacity-80 absolute z-10 w-full">
                <Header></Header>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-20 max-w-6xl mx-auto">
                <Estate></Estate>
            </div>
        </div>
    );
};

export default Home;