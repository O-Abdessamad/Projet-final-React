import { NavLink, Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP, FaSnapchat, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <footer className="bg-coleur-footer text-center  d-flex justify-content-around align-items-center flex-column flex-lg-row gap-30" >
                <div className="footer-texte">
                    <h1 className="font-Montserrat fw-bold" > GET IN TOUCH </h1>
                    <p className="font-Montserrat">
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, </p>
                    <p>New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className="footer-icones">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaPinterestP />
                        <FaSnapchat />
                        <FaYoutube />
                    </div>
                </div>
                <div className="footer-links d-flex justify-content-center gap-30 flex-column flex-md-row">
                    <div className="links1 d-flex flex-column gap-10">
                        <h1 className="font-Montserrat fw-bold">link</h1>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">Search</NavLink>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">About Us</NavLink>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">Contact Us</NavLink>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">Returns</NavLink>
                    </div>
                    <div className="links2 d-flex flex-column gap-10">
                        <h1 className="font-Montserrat fw-bold">Help</h1>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">Tarack Order</NavLink>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">Returns</NavLink>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">Shipping Us</NavLink>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">FAQs</NavLink>
                    </div>
                </div>

            </footer>
        </>
    )
}



