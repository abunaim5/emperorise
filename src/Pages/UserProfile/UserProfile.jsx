import { useContext } from "react";
import Footer from "../../components/Common/Footer/Footer";
import Header from "../../components/Common/Header/Header";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { MdOutlinePhotoSizeSelectActual, MdOutlineMailOutline } from "react-icons/md";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;


    return (
        <div className="bg-[#F5F5DC]">
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            <div className="my-32 flex items-center justify-center text-[#333333]">
                <div className="max-w-md p-8 text-[#333333] sm:flex sm:space-x-6 glass">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded bg-gray-500 dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{displayName}</h2>
                            <span className="text-sm">Member</span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <span className="text-blue-400 text-2xl"><MdOutlineMailOutline /></span>
                                <span>{email ? email : 'Not found'}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <span className="text-green-400 text-2xl"><MdOutlinePhotoSizeSelectActual /></span>
                                <span>{photoURL}</span>
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