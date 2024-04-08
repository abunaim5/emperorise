import { Link, NavLink } from "react-router-dom";
import { GiCrenelCrown } from "react-icons/gi";

const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>Home</NavLink></li> */}
    </>

    return (
        <div className="bg-[#4B0082]">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-[#333333] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <h2 className="cursor-pointer text-xl font-bold text-[#FFD700] flex items-center gap-1"><span className="text-3xl"><GiCrenelCrown /></span>Emperorise</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-[#333333] px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'><button className="btn w-auto h-auto min-h-max rounded-none px-5 py-2 text-lg font-semibold text-[#333333] bg-[#C0C0C0] border-none hover:bg-[#FFD700]">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;