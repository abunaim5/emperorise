import { PiHandshake } from "react-icons/pi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineDollar } from "react-icons/ai";
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 200
        });
        AOS.refresh();
    }, [])

    return (
        <div>
            <h3 className="text-3xl font-bold text-[#333333]">Our Services</h3>
            <p className="mt-4 text-gray-700 text-pretty">At Emperorise, we pride ourselves on offering unparalleled services tailored to meet the unique needs of our discerning clientele. With a commitment to excellence and a passion for luxury real estate, our team provides comprehensive assistance at every step of your journey.</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div data-aos='fade-right' className="card shadow-md glass rounded-none">
                    <div className="mx-auto px-10 pt-10">
                        <div className="w-24 rounded-full text-center text-6xl">
                            <span className="flex items-center justify-center text-[#4B0082]"><PiHandshake /></span>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#333333]">Sell your home with us</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions mt-4">
                            <button className="btn border hover:text-[#333333] text-white hover:border-[#4B0082] border-transparent hover:bg-transparent bg-[#4B0082] rounded-none">See More</button>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-right' className="card shadow-md glass rounded-none">
                    <div className="mx-auto px-10 pt-10">
                        <div className="w-24 rounded-full text-center text-6xl">
                            <span className="flex items-center justify-center text-[#4B0082]"><HiOutlineClipboardDocumentList /></span>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#333333]">Buy a home with us</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions mt-4">
                            <button className="btn border hover:text-[#333333] text-white hover:border-[#4B0082] border-transparent hover:bg-transparent bg-[#4B0082] rounded-none">See More</button>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-left' className="card shadow-md glass rounded-none">
                    <div className="mx-auto px-10 pt-10">
                        <div className="w-24 rounded-full text-center text-6xl">
                            <span className="flex items-center justify-center text-[#4B0082]"><MdOutlineMapsHomeWork /></span>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#333333]">Evaluate your home for free</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions mt-4">
                            <button className="btn border hover:text-[#333333] text-white hover:border-[#4B0082] border-transparent hover:bg-transparent bg-[#4B0082] rounded-none">See More</button>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-left' className="card shadow-md glass rounded-none">
                    <div className="mx-auto px-10 pt-10">
                        <div className="w-24 rounded-full text-center text-6xl">
                            <span className="flex items-center justify-center text-[#4B0082]"><AiOutlineDollar /></span>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#333333]">Free certified appraisal</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions mt-4">
                            <button className="btn border hover:text-[#333333] text-white hover:border-[#4B0082] border-transparent hover:bg-transparent bg-[#4B0082] rounded-none">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;