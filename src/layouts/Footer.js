import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP, FaSnapchat, FaYoutube } from "react-icons/fa";
import "./footer.scss"

export const Footer = () => {
    return (
        <>
            <footer className="bg-coleur-footer text-center d-flex justify-content-center align-items-center flex-column flex-lg-row gap-30 pt-30 pb-30  " >
                <div className="footer-texte d-flex justify-content-center align-items-center flex-column pt-lg-30 pb-lg-30">
                    <h3 className="font-Montserrat fw-bold  mb-20" > GET IN TOUCH </h3>
                    <p className="font-Montserrat p-5">
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, </p>
                    <p className="font-Montserrat">New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className="footer-icones text-coleur-gry-nav d-flex justify-content-around ">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaPinterestP />
                        <FaSnapchat />
                        <FaYoutube />
                    </div>
                </div>
                <div className="footer-links d-flex justify-content-around flex-column flex-md-row  pt-lg-30 pb-lg-30">
                    <div className="links1 d-flex justify-content-center align-items-center flex-column gap-10">
                        <h3 className="font-Montserrat fw-bold">link</h3>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">Search</NavLink>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">About Us</NavLink>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">Contact Us</NavLink>
                        <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  footer-nav ">Returns</NavLink>
                    </div>
                    <div className="links2 d-flex justify-content-center align-items-center flex-column gap-10 ">
                        <h3 className="font-Montserrat fw-bold">Help</h3>
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



