import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-[#F5F5DC] h-screen flex items-center justify-center text-center">
            <div>
                <h1 className="text-[#333333] font-bold text-5xl mb-6">Page not found</h1>
                <Link to='/'><button className="btn w-auto h-auto min-h-max rounded-none px-7 py-2 text-lg font-semibold hover:text-[#333333] border border-[#C0C0C0] hover:border-transparent text-[#C0C0C0] bg-transparent hover:bg-[#FFD700]">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;