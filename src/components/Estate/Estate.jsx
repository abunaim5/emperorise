import { Link } from "react-router-dom";

const Estate = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold text-[#333333]">Estates</h3>
            <div>
                <div className="card w-96 glass rounded-none mt-10 text-[#333333]">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body p-6">
                        <h2 className="card-title">Life hack</h2>
                        <p>Status: </p>
                        <p>Segment: </p>
                        <p>Location: </p>
                        <div className="card-actions">
                        <Link to='/details'><button className="btn w-auto h-auto min-h-max rounded-none px-7 py-2 font-semibold hover:text-[#333333] border border-[#C0C0C0] hover:border-transparent text-[#333333] bg-transparent hover:bg-[#C0C0C0]">View Property</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;