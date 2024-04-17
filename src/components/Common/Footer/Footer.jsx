import { useEffect } from "react";
import { GiCrenelCrown } from "react-icons/gi";
import AOS from 'aos'
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 200
        });
        AOS.refresh();
    }, [])

    return (
        <footer data-aos='fade-down' className="p-10 max-w-6xl mx-auto text-[#C0C0C0] py-16 px-2">
            <div className="footer pb-10 border-b border-[#C0C0C0]">
                <aside className="">
                    <h2 className="cursor-pointer text-xl justify-start md:justify-center font-bold text-[#FFD700] flex items-center gap-1"><span className="text-3xl"><GiCrenelCrown /></span>Emperorise</h2>
                    <p>Emperorise Industries Ltd.<br />Providing your dream properties since 2015</p>
                </aside>
                <nav className="">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className="p-4 text-center mt-10">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Emperorise Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;