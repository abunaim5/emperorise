import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Common/Footer/Footer";
import Header from "../../components/Common/Header/Header";
import Estate from "../../components/Estate/Estate";
import { ColorRing } from "react-loader-spinner";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const Home = () => {
    const {loading} = useContext(AuthContext);

    if(loading){
        return <div className="flex items-center justify-center min-h-screen"><ColorRing></ColorRing></div>
    }

    return (
        <div className="relative bg-[#F5F5DC]">
            <Helmet>
                <title>Emperorise | Home</title>
            </Helmet>
            <div className="bg-[#4B0082] bg-opacity-80 absolute z-10 w-full">
                <Header></Header>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="my-20 max-w-6xl mx-auto">
                <Estate></Estate>
            </div>
            <div className="bg-[#4B0082]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;