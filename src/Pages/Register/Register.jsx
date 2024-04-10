import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import Header from "../../components/Common/Header/Header";
import { Link } from "react-router-dom";

const Register = () => {

    function SimpleRegistrationForm() {
        return (
            <div className="flex items-center justify-center py-8 bg-[#F5F5DC]">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="#333333">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="#333333" className="-mb-3">
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
                            <Typography variant="h6" color="#333333" className="-mb-3">
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
                            <Typography variant="h6" color="#333333" className="-mb-3">
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
                            <Typography variant="h6" color="#333333" className="-mb-3">
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
                            className="rounded-none "
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
                        <Button className="mt-6 rounded-none text-[#333333] bg-[#FFD700]" fullWidth>
                            sign up
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to='/login'><button className="btn-link text-[#333333] font-medium">
                                Sign In
                            </button></Link>
                        </Typography>
                    </form>
                </Card>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            {
                SimpleRegistrationForm()
            }
        </div>


    );
};

export default Register;