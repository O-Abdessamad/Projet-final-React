import { NavLink, Link } from "react-router-dom";
import img_log from "../layouts/image/logo.png";
import "./header.scss"
import { AiOutlineHeart,AiOutlineShoppingCart } from "react-icons/ai";


export const Header = () => {
    return (
        <>
            <header className="d-flex justify-content-between  p-10 align-items-center text-light ">
                <div className=" ps-30 "> <Link to={"/"} ><img src={img_log} alt="log" /> </Link> </div>
                <div className="header_menu  d-none d-lg-flex justify-content-around ">
                    <NavLink to={"/"} className="text-decoration-none font-Montserrat text-coleur-gry-nav menu-nav ">Home</NavLink>
                    <NavLink to={"/produit"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  menu-nav ">Produit</NavLink>
                    <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  menu-nav ">About</NavLink>
                    <NavLink to={"/contact"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  menu-nav ">Contact</NavLink>
                </div>
                <div className="header_icone  d-flex  justify-content-center align-items-center">
                    <NavLink to={"/"} className="text-decoration-none icone-nav text-coleur-gry-nav icone-heart pe-30 ">  <AiOutlineHeart /> </NavLink>
                    <div className="  position-relative">
                        <span className=" bg-black p-6 panier"> 1 </span>
                        <NavLink to={"/"} className="text-decoration-none icone-nav text-coleur-gry-nav ps-30 pe-15 ">  <AiOutlineShoppingCart /> </NavLink>
                    </div>
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
                                            <NavLink to={"/"} className="text-decoration-none font-Montserrat text-coleur-gry-nav menu-nav mb-10">Home</NavLink></li>
                                        <li>
                                            <NavLink to={"/product"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  menu-nav ">Product</NavLink></li>
                                        <li>
                                            <NavLink to={"/about"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  menu-nav ">About</NavLink></li>
                                        <li>
                                            <NavLink to={"/contact"} className="text-decoration-none font-Montserrat text-coleur-gry-nav  menu-nav ">Contact</NavLink></li>
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


