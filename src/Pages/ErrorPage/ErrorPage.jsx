import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-[#F5F5DC] h-screen flex items-center justify-center text-center">
            <section className="flex items-center h-full w-full p-16 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600 dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
                        <p className="mt-4 mb-8 text-gray-400 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/'><button className="px-8 py-3 font-semibold  hover:text-[#333333] border border-[#C0C0C0] hover:border-transparent text-[#C0C0C0] bg-transparent hover:bg-[#FFD700] dark:bg-violet-600 dark:text-gray-50">Back to homepage</button></Link>
                    </div>
                </div>
            </section>

            {/* <div>
                <h1 className="text-[#333333] font-bold text-5xl mb-6">Page not found</h1>
                <Link to='/'><button className="btn w-auto h-auto min-h-max rounded-none px-7 py-2 text-lg font-semibold hover:text-[#333333] border border-[#C0C0C0] hover:border-transparent text-[#C0C0C0] bg-transparent hover:bg-[#FFD700]">Back to Home</button></Link>
            </div> */}
        </div>
    );
};

export default ErrorPage;