import { useContext, useEffect } from "react";
import Footer from "../../components/Common/Footer/Footer";
import Header from "../../components/Common/Header/Header";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { MdOutlinePhotoSizeSelectActual, MdOutlineMailOutline } from "react-icons/md";
import AOS from 'aos'
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    // const { displayName, email, photoURL } = user;

    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 200
        });
        AOS.refresh();
    }, [])


    return (
        <div className="bg-[#F5F5DC]">
            <Helmet>
                <title>Emperorise | Profile</title>
            </Helmet>
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            <div data-aos='fade-up' className="my-32 flex items-center justify-center text-[#333333] max-w-6xl mx-auto px-2">
                <div className="p-8 text-[#333333] sm:flex sm:space-x-6 glass w-full">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={user?.photoURL || "https://source.unsplash.com/100x100/?portrait?1"} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500 dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{user && user?.displayName}</h2>
                            <span className="text-sm">Member</span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <span className="text-blue-400 text-2xl"><MdOutlineMailOutline /></span>
                                <span>{user && user?.email || 'Not Provide'}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <span className="text-green-400 text-2xl"><MdOutlinePhotoSizeSelectActual /></span>
                                <span className="text-xs md:text-base">{user && user?.photoURL}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#4B0082]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default UserProfile;