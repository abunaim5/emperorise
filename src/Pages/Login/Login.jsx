import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import Header from "../../components/Common/Header/Header";
import { Link } from "react-router-dom";

const Login = () => {
    function SimpleLoginForm() {
        return (
            <div className="flex items-center justify-center py-8 bg-[#F5F5DC]">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" className="text-[#333333]">
                        Sign In
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Please login your account.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
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
                        <div>
                            <button>Forgot password?</button>
                        </div>
                        <Button className="mt-6 rounded-none text-[#333333] bg-[#FFD700]" fullWidth>
                            sign In
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Don&apos;t have an account?{" "}
                            <Link to='/register'><button className="btn-link text-[#333333] font-medium">
                                Sign Up
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
                SimpleLoginForm()
            }
        </div>
    );
};

export default Login;