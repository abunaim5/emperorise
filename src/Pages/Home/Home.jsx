import Banner from "../../components/Banner/Banner";
import Header from "../../components/Common/Header/Header";

const Home = () => {
    return (
        <div className="relative">
            <div>
                <Header></Header>
            </div>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;