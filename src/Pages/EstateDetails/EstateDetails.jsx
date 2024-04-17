import { useEffect } from "react";
import Header from "../../components/Common/Header/Header";
import { useParams, useLoaderData, Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css";
import Footer from "../../components/Common/Footer/Footer";
import { GrLocation } from "react-icons/gr";
import { MdOutlineAreaChart } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { GrStatusInfo } from "react-icons/gr";
import { MdOutlineHomeWork } from "react-icons/md";
import { Helmet } from "react-helmet";

const EstateDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id)
    const estates = useLoaderData()
    const estate = estates.find(estate => estate.id === idInt)
    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = estate;

    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 200
        });
        AOS.refresh();
    }, [])

    return (
        <div className="min-h-screen bg-[#F5F5DC]">
            <Helmet>
                <title>Emperorise | Estate Details</title>
            </Helmet>
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            <div className="max-w-6xl mx-auto my-32 flex items-center justify-center px-2">
                <div data-aos='fade-up' className="card glass rounded-none text-[#333333] lg:flex-row">
                    <figure className="w-full lg:w-1/2"><img className="h-full" src={image} alt="car!" /></figure>
                    <div className="card-body p-6">
                        <h2 className="card-title text-2xl md:text-4xl">{estate_title}</h2>
                        <p className="text-lg">{description}</p>
                        <ul className="list-disc list-inside">
                            <p className="text-lg">Facilities:</p>
                            {
                                facilities.map((facility, idx) => <li key={idx}>{facility}</li>)
                            }
                        </ul>
                        <p className="flex items-center gap-2 text-lg"><span className="text-2xl"><GrStatusInfo /></span><span>{status}</span></p>
                        <p className="flex items-center gap-2 text-lg"><span className="text-2xl"><MdOutlineHomeWork /></span><span>{segment_name}</span></p>
                        <p className="flex items-center gap-2 text-lg"><span className="text-2xl"><MdOutlineAreaChart /></span><span>{area}</span></p>
                        <p className="flex items-center gap-2 text-lg"><span className="text-2xl"><GrLocation /></span><span>{location}</span></p>
                        <p className="flex items-center gap-2 text-lg"><span className="text-2xl"><IoPricetagOutline /></span><span>{price}</span></p>
                        <div className="card-actions mt-4">
                            <Link to='/contact'><button className="btn w-auto h-auto min-h-max rounded-none px-7 py-2 font-semibold hover:text-[#333333] border border-[#C0C0C0] hover:border-transparent text-[#333333] bg-transparent hover:bg-[#FFD700] text-lg">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#4B0082]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default EstateDetails;