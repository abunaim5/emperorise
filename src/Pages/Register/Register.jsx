import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import Header from "../../components/Common/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Common/Footer/Footer";

const Register = () => {

    function SimpleRegistrationForm() {
        return (
            <div className="flex items-center justify-center py-8 h-[calc(100vh-72px)]">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" className="text-[#333333]">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Your name"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Photo Url
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="url"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" className="-mb-3 text-[#333333]">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 rounded-none focus:!border-t-[#FFD700]"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
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
                        <Button className="mt-6 text-base rounded-none text-[#333333] bg-[#FFD700]" fullWidth>
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
        );
    }

    return (
        <div className="bg-[#F5F5DC] min-h-screen">
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            {
                SimpleRegistrationForm()
            }
            <div className="bg-[#4B0082]">
                <Footer></Footer>
            </div>
        </div>


    );
};

export default Register;