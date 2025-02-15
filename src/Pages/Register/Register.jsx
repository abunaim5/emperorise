import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography
} from "@material-tailwind/react";
import Header from "../../components/Common/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Common/Footer/Footer";
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import AOS from 'aos'
import "aos/dist/aos.css";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    // console.log(createUser);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // console.log(errors)
    const onSubmit = (data) => {
        const { email, password, name, photoUrl } = data;
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            return toast.error('Password must have at least one uppercase and one lowercase letter')
        }
        createUser(email, password)
            .then(() => {
                updateUser(name, photoUrl)
                    .then(() => console.log('Profile updated'))
                    .catch(error => console.error(error))
                toast.success('Successfully Register');
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(`${errorMessage}`)
            });
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 200
        });
        AOS.refresh();
    }, [])

    return (
        <div className="bg-[#F5F5DC] min-h-screen">
            <Helmet>
                <title>Emperorise | Register</title>
            </Helmet>
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>

            <div data-aos='fade-up' className="flex items-center justify-center py-32">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" className="text-[#333333]">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Your Name
                            </Typography>
                            <Input
                                {...register('name', { required: 'This field is required' })}
                                size="lg"
                                placeholder="Your name"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {errors.name && <span className="text-red-700 -mt-5">{errors.name.message}</span>}
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Your Email
                            </Typography>
                            <Input
                                {...register('email', { required: 'This field is required' })}
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {errors.email && <span className="text-red-700 -mt-5">{errors.email.message}</span>}
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Photo Url
                            </Typography>
                            <Input
                                {...register('photoUrl', { required: 'This field is required' })}
                                size="lg"
                                placeholder="Photo Url"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {errors.photoUrl && <span className="text-red-700 -mt-5">{errors.photoUrl.message}</span>}
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Password
                            </Typography>
                            <Input
                                {...register('password', {
                                    required: 'This field is required', minLength: {
                                        value: 6,
                                        message: 'Password should be 6 character or more'
                                    }
                                })}
                                type={showPassword ? "text" : "password"}
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                icon={<button onClick={handleShowPassword} type="button" className="text-lg">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>}
                            />
                            {errors.password && <span className="text-red-700 -mt-5">{errors.password.message}</span>}
                        </div>
                        <Checkbox
                            className="rounded-none"
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button type="submit" className="mt-6 text-base rounded-none text-[#333333] bg-[#FFD700]" fullWidth>
                            sign up
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to='/login'><button className="btn-link text-[#333333] font-semibold">
                                Sign In
                            </button></Link>
                        </Typography>
                    </form>
                </Card>
            </div>

            {/* {
                SimpleRegistrationForm()
            } */}
            <div className="bg-[#4B0082]">
                <Footer></Footer>
            </div>
        </div>


    );
};

export default Register;