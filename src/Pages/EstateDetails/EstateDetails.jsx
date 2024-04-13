import { useEffect } from "react";
import Header from "../../components/Common/Header/Header";
import { useParams, useLoaderData, Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css";

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
            <div className="bg-[#4B0082]">
                <Header></Header>
            </div>
            <div className="max-w-6xl mx-auto h-[calc(100vh-72px)] flex items-center justify-center">
                <div data-aos='fade-up' className="card glass rounded-none text-[#333333] flex-row">
                    <figure className="w-1/2"><img className="h-full" src={image} alt="car!" /></figure>
                    <div className="card-body p-6">
                        <h2 className="card-title text-4xl">{estate_title}</h2>
                        <p>{description}</p>
                        <p>Status: {status}</p>
                        <p>Segment: {segment_name}</p>
                        <ul className="list-disc list-inside">
                            <p>Facilities:</p>
                            {
                                facilities.map((facility, idx) => <li key={idx}>{facility}</li>)
                            }
                        </ul>
                        <p>Area: {area}</p>
                        <p>Location: {location}</p>
                        <p>Price: {price}</p>
                        <div className="card-actions mt-4">
                            <Link to='/contact'><button className="btn w-auto h-auto min-h-max rounded-none px-7 py-2 font-semibold hover:text-[#333333] border border-[#C0C0C0] hover:border-transparent text-[#333333] bg-transparent hover:bg-[#FFD700] text-lg">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;