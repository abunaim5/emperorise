import { Link, NavLink } from "react-router-dom";
import { GiCrenelCrown } from "react-icons/gi";

const Header = () => {
    const links = <>
        <li className=""><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div>
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
                    <ul className="menu menu-horizontal text-[#C0C0C0] px-1 text-base">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-[#C0C0C0] btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white w-52">
                            <li><a className="">My Profile</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <Link to='/login'><button className="btn w-auto h-auto min-h-max rounded-none px-7 py-2 text-lg font-semibold hover:text-[#333333] border border-[#C0C0C0] hover:border-transparent text-[#C0C0C0] bg-transparent hover:bg-[#FFD700]">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;