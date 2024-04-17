import { Helmet } from "react-helmet";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import gallery1 from '/hotel1.jpg'
import gallery2 from '/hotel2.jpg'
import gallery3 from '/hotel3.jpg'
import gallery4 from '/hotel4.jpg'

const Gallery = () => {
    return (
        <div className="bg-[#F5F5DC]">
            <Helmet>
                <title>Emperorise | Gallery</title>
            </Helmet>
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            <div className="max-w-6xl mx-auto my-20 space-y-6">
                <h2 className="text-2xl font-extrabold text-[#333333]">Our Portfolio</h2>
                <img className="w-full" src={gallery1} alt="" />
                <img className="w-full" src={gallery2} alt="" />
                <img className="w-full" src={gallery3} alt="" />
                <img className="w-full" src={gallery4} alt="" />
            </div>
            <div className="bg-[#4B0082]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Gallery;