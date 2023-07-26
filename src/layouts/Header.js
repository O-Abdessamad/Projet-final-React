import { NavLink, Link } from "react-router-dom";
import img_log from "../layouts/image/logo.png";
import "./header.scss"
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";


export const Header = () => {
    return (
        <>
            <header className="d-flex justify-content-between bg-info p-10 align-items-center text-light">
                <div> <Link><img src={img_log} alt="log" /> </Link> </div>
                <div className="header_menu  d-none d-lg-flex justify-content-around ">
                    <NavLink to={"/"} className="text-decoration-none font-Montserrat text-coleur-gry-nav menu-nav ">Home</NavLink>
                    <NavLink to={"/product"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  menu-nav ">Product</NavLink>
                    <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  menu-nav ">About</NavLink>
                    <NavLink to={"/contact"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  menu-nav ">Contact</NavLink>
                </div>
                <div className="header_icone bg-light d-flex  justify-content-around align-items-center">
                    <NavLink>  <AiOutlineHeart className="text-decoration-none icone-nav text-coleur-gry-nav " /> </NavLink>
                    <NavLink>  <AiOutlineShoppingCart className="text-decoration-none icone-nav text-coleur-gry-nav" /> </NavLink>
                    {/* menu-bergre */}
                    <div className="menu-bergre d-lg-none">
                        <nav className="navbar ">
                            <button
                                className="navbar-toggler "
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar"
                                aria-controls="offcanvasNavbar"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="offcanvas offcanvas-end"
                                tabIndex={-1}
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                            >
                                <div className="offcanvas-header ">
                                    <div className="offcanvas-header " />
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link text-coleur-link-navv   active"
                                                href="#cover"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link text-coleur-link-navv  " href="#about">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link text-coleur-link-navv " href="#menu">
                                                Menu
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link text-coleur-link-navv  " href="#events">
                                                Events
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link text-coleur-link-navv  " href="#chef">
                                                Chefs
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link text-coleur-link-navv  " href="#gallery">
                                                Gallery
                                            </a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                className="nav-link dropdown-toggle text-coleur-link-navv"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Drop Down
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="nav-link text-coleur-link-navv " href="#contact">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* end menu-bergre */}

                </div>

            </header>
        </>
    )
}


