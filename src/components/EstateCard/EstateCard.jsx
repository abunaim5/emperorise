import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const EstateCard = ({estate}) => {
    const {image, estate_title, status, segment_name, location} = estate;

    return (
        <div>
            <div className="card glass rounded-none text-[#333333]">
                <figure><img className="h-[245px] w-full" src={image} alt="car!" /></figure>
                <div className="card-body p-6">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>Status: {status}</p>
                    <p>Segment: {segment_name}</p>
                    <p>Location: {location}</p>
                    <div className="card-actions mt-4">
                        <Link to='/details'><button className="btn w-auto h-auto min-h-max rounded-none px-7 py-2 font-semibold hover:text-[#333333] border border-[#C0C0C0] hover:border-transparent text-[#333333] bg-transparent hover:bg-[#C0C0C0]">View Property</button></Link>
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