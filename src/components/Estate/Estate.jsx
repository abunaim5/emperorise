// import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom"
import EstateCard from "../EstateCard/EstateCard";

const Estate = () => {
    const estates = useLoaderData()

    return (
        <div>
            <h3 className="text-3xl font-bold text-[#333333]">Luxury Estates</h3>
            <p className="mt-4 text-gray-700 text-pretty">Welcome to our Luxury Estates section, where extravagance meets elegance in every detail. Immerse yourself in a world of unparalleled opulence and sophistication as you explore our curated collection of exquisite properties. From sprawling mansions to secluded villas, each residence embodies the pinnacle of luxury living, offering the ultimate in comfort, style, and refinement.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    estates.map(estate => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Estate;