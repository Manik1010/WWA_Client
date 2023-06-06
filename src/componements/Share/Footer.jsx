import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../../../public/logo.jpeg';

const Footer = () => {
    return (
        // <div>
        //     <footer className="footer p-10 bg-base-300 text-base-content">
        //         <div>
        //             <span className="footer-title">Services</span>
        //             <a className="link link-hover">Branding</a>
        //             <a className="link link-hover">Design</a>
        //             <a className="link link-hover">Marketing</a>
        //             <a className="link link-hover">Advertisement</a>
        //         </div>
        //         <div>
        //             <span className="footer-title">Company</span>
        //             <a className="link link-hover">About us</a>
        //             <a className="link link-hover">Contact</a>
        //             <a className="link link-hover">Jobs</a>
        //             <a className="link link-hover">Press kit</a>
        //         </div>
        //         <div>
        //             <span className="footer-title">Social</span>
        //             <div className="grid grid-flow-col gap-4">

        //                 <a
        //                     href="https://www.instagram.com/mdblmanikislam/"
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     className="mx-2 text-gray-500 hover:text-pink-500 transition-colors duration-300"
        //                 >
        //                     <FaInstagram className="text-2xl" />
        //                 </a>
        //                 <a
        //                     href="https://web.facebook.com/mdbl.manik"
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     className="mr-2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
        //                 >
        //                     <FaFacebook className="text-2xl" />
        //                 </a>
        //                 <a
        //                     href="https://www.linkedin.com/in/manik-molla-9b1562250/"
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     className="ml-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
        //                 >
        //                     <FaLinkedin className="text-2xl" />
        //                 </a>

        //             </div>
        //         </div>
        //     </footer>
        // </div>
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img className="rounded-full w-1/2" src={logo}></img>
                    <p><span className="font-extrabold">Worldly Words Academy(WWA)</span><br />Providing reliable tech since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Classes</a>
                    <a className="link link-hover">Instructor</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="https://www.instagram.com/mdblmanikislam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-2 text-gray-500 hover:text-pink-500 transition-colors duration-300"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a
                            href="https://web.facebook.com/mdbl.manik"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
                        >
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/manik-molla-9b1562250/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                        >
                            <FaLinkedin className="text-2xl" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;