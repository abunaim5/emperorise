import { useContext } from "react";
import Footer from "../../components/Common/Footer/Footer";
import Header from "../../components/Common/Header/Header";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { user, updateUser, profileUpdate, setProfileUpdate } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        // reset,
        // formState: { errors }
    } = useForm();

    const onSubmit = data => {
        const { name, photoUrl } = data;
        updateUser(name, photoUrl)
            .then(() => {
                setProfileUpdate(!profileUpdate);
                toast.success('Profile Updated')
            })
            .catch(error => console.error(error))
        // setUser({...user, displayName: name, photoURL: photo});
    }


    return (
        <div className="bg-[#F5F5DC]">
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            <div className="max-w-6xl mx-auto my-32 flex items-center justify-center card glass rounded-none">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <fieldset className="grid grid-cols-4 gap-6 p-6">
                        <div className="space-y-2 col-span-full lg:col-span-2">
                            <p className="font-semibold text-lg">Update Profile</p>
                            <p className="">{user && user?.displayName}</p>
                            <p className="">{user && user?.email}</p>
                            <p className="">{user && user?.photoURL}</p>
                        </div>
                        <div className="space-y-6 text-[#333333] text-base">
                            <div className="sm:col-span-3">
                                <label htmlFor="username" className="font-semibold">Username</label>
                                <input
                                    {...register('name')}
                                    id="username" type="text" placeholder="Username" className="w-full bg-transparent p-3  outline-none mt-2 border border-blue-gray-200 !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700] " />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="PhotoURL" className="font-semibold">PhotoURL</label>
                                <input
                                    {...register('photoUrl')}
                                    id="website" type="text" placeholder="https://" className="w-full bg-transparent p-3  outline-none mt-2 border border-blue-gray-200 !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]" />
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
            <div className="bg-[#4B0082]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default UpdateProfile;