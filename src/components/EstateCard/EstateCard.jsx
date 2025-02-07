import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GrLocation, GrStatusInfo } from "react-icons/gr";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";

const EstateCard = ({ estate }) => {
    const { id, image, estate_title, location, status, segment_name, price } = estate;

    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 200
        });
        AOS.refresh();
    }, [])

    return (
        <div data-aos="flip-left">
            <div className="card glass rounded-none text-[#333333]">
                <figure><img className="h-[245px] w-full" src={image} alt="car!" /></figure>
                <div className="card-body p-6 text-lg">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="flex items-center gap-2"><span><GrStatusInfo /></span> {status}</p>
                    <p className="flex items-center gap-2"><span><MdOutlineHomeWork /></span> {segment_name}</p>
                    <p className="flex items-center gap-2"><span><GrLocation /></span> {location}</p>
                    <p className="flex items-center gap-2"><span><IoPricetagOutline /></span> {price}</p>
                    <div className="card-actions mt-4">
                        <Link to={`/details/${id}`}><button className="btn w-auto h-auto min-h-max rounded-none px-7 py-2 font-semibold hover:text-[#333333] border border-[#C0C0C0] hover:border-transparent text-[#333333] bg-transparent hover:bg-[#C0C0C0]">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    estate: PropTypes.object.isRequired
}

export default EstateCard;