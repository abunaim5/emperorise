import { useContext, useEffect } from "react";
import Footer from "../../components/Common/Footer/Footer";
import Header from "../../components/Common/Header/Header";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AOS from 'aos'
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    const { user, updateUser, profileUpdate, setProfileUpdate } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        const { name, photoUrl } = data;
        updateUser(name, photoUrl)
            .then(() => {
                setProfileUpdate(!profileUpdate);
                toast.success('Profile Updated')
            })
            .catch(error => console.error(error))
    }

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
                <title>Emperorise | Update Profile</title>
            </Helmet>
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            <div className="px-2">
                <div data-aos='fade-up' className="max-w-6xl mx-auto my-32 flex items-center justify-center card glass rounded-none">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 w-full">
                            <div className="space-y-2 col-span-full lg:col-span-2">
                                <p className="font-bold text-2xl">Update Your Profile</p>
                                <p><span className="font-semibold">Name: </span><span>{user && user?.displayName}</span></p>
                                <p><span className="font-semibold">Email: </span><span>{user && user?.email || 'Not provide'}</span></p>
                                <p className=""><span className="font-semibold">Photo URL: </span><span className="break-all">{user && user?.photoURL}</span></p>
                            </div>
                            <div className="space-y-6 text-[#333333] text-base col-span-full lg:col-span-2">
                                <div className="sm:col-span-3">
                                    <label htmlFor="username" className="font-semibold">Username</label>
                                    <input
                                        {...register('name', { required: 'This field is required' })}
                                        id="username" type="text" placeholder="Username" className="w-full bg-transparent p-3  outline-none mt-2 border border-blue-gray-200 !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700] " />
                                    {errors.name && <span className="text-red-700 -mt-5">{errors.name.message}</span>}
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="photoURL" className="font-semibold">PhotoURL</label>
                                    <input
                                        {...register('photoUrl', { required: 'This field is required' })}
                                        id="photoURL" type="text" placeholder="https://" className="w-full bg-transparent p-3  outline-none mt-2 border border-blue-gray-200 !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]" />
                                    {errors.photoUrl && <span className="text-red-700 -mt-5">{errors.photoUrl.message}</span>}
                                </div>
                                <div className="">
                                    <div className="">
                                        <button type="submit" className="btn w-auto h-auto min-h-max rounded-none px-7 py-2 text-base font-semibold text-[#333333] border border-[#C0C0C0] hover:border-transparent bg-transparent hover:bg-[#FFD700]">Update</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className="bg-[#4B0082]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default UpdateProfile;