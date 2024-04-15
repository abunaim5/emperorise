import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import Header from "../../components/Common/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Common/Footer/Footer";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const {logInUser, user} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const onSubmit = data =>{
        if(user){
            return toast.error('Already Logged In')
        }
        const {email, password} = data;
        logInUser(email, password)
        .then(()=>{
            toast.success('Successfully Logged In');
            reset();
        })
        .catch(error=>{
            toast.error(`${error.message}`);
        })
    }

    return (
        <div className="min-h-screen bg-[#F5F5DC]">
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            <div className="flex items-center justify-center py-32">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" className="text-[#333333]">
                        Sign In
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Please login your account.
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Your Email
                            </Typography>
                            <Input
                                {...register('email', {required: 'This field is required'})}
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {errors.email && <span className="text-red-700 -mt-5">{errors.email.message}</span>}
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Password
                            </Typography>
                            <Input
                                {...register('password', {required: 'This field is required'})}
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {errors.password && <span className="text-red-700 -mt-5">{errors.password.message}</span>}
                        </div>
                        <div>
                            <button>Forgot password?</button>
                        </div>
                        <Button type="submit" className="mt-6 rounded-none text-base text-[#333333] bg-[#FFD700]" fullWidth>
                            sign In
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Don&apos;t have an account?{" "}
                            <Link to='/register'><button className="btn-link text-[#333333] font-semibold">
                                Sign Up
                            </button></Link>
                        </Typography>
                    </form>
                </Card>
            </div>
            <div className="bg-[#4B0082]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Login;