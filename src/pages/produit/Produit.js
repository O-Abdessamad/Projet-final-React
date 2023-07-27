import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import React from 'react';
import "./produit.scss"
import "../home/home.scss"


import img_produit1 from "../../layouts/image/img_produit/img_produit1.jpeg"
import img_produit2 from "../../layouts/image/img_produit/img_produit2.jpeg"
import img_produit3 from "../../layouts/image/img_produit/img_produit3.jpeg"
import img_produit4 from "../../layouts/image/img_produit/img_produit4.jpeg"

export const Produit = () => {
    return (
        <div >

            <div className="cov-produit">
                <div className="titres text-coleur-byad bg-black d-flex justify-content-center align-items-center flex-column ">
                    <h1>PRODUCT</h1>
                    <p> New Arrivais Women Collection</p>
                </div>
            </div>

            <div className="main-produit d-flex justify-content-center align-items-center align-items-md-start mt-30 pt-30 pb-30 mb-30 p-30 flex-column flex-md-row ">

                <div className=' ms-lg-30  ps-lg-30 categories d-flex justify-content-center align-items-center align-items-md-start gap-5 flex-column  w-25'>
                    <h3 className=" fw-bolder fs-2">Categories</h3>
                    <NavLink to={"/"} className={"text-decoration-none font-Montserrat text-coleur-gry-nav "}>All</NavLink>
                    <NavLink to={"/"} className={"text-decoration-none font-Montserrat text-coleur-gry-nav"}>Women</NavLink>
                    <NavLink to={"/"} className={"text-decoration-none font-Montserrat text-coleur-gry-nav"}>Kids</NavLink>
                    <NavLink to={"/"} className={"text-decoration-none font-Montserrat text-coleur-gry-nav"}>Men</NavLink> <br />
                    <h3 className=" fw-bolder fs-2">Filter</h3>
                    <div className="div-search  border border-1 p-20 d-flex align-items-center gap-10 ">
                        <input className=" border border-0" type="text" placeholder="Search Products..." />
                        <BiSearch className="BiSearch" />
                    </div>

                </div>

                <div className=' me-lg-30  pe-lg-30 produits '>
                    <p className="font-Montserrat text-coleur-gry-nav text-end me-lg-30  pe-lg-30">Nombre de produit search : 15 all</p>
                    <div className=" me-lg-40  pe-lg-40 our_products_img mt-30  d-flex justify-content-center align-items-center gap-5 flex-column flex-md-row flex-wrap">

                        <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
                            <img src={img_produit3} width="100%" alt="" />
                            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
                            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                                <p className=" m-0">Herschel supply co 25l</p>
                                <p className=" m-0">$75.00</p>
                            </div>
                        </div>
                        <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
                            <img src={img_produit2} width="100%" alt="" />
                            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
                            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                                <p className=" m-0">Herschel supply co 25l</p>
                                <p className=" m-0">$75.00</p>
                            </div>
                        </div>
                        <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
                            <img src={img_produit1} width="100%" alt="" />
                            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
                            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                                <p className=" m-0">Herschel supply co 25l</p>
                                <p className=" m-0">$75.00</p>
                            </div>
                        </div>
                        <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
                            <img src={img_produit4} width="100%" alt="" />
                            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
                            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                                <p className=" m-0">Herschel supply co 25l</p>
                                <p className=" m-0">$75.00</p>
                            </div>
                        </div>
                        <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
                            <img src={img_produit1} width="100%" alt="" />
                            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
                            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                                <p className=" m-0">Herschel supply co 25l</p>
                                <p className=" m-0">$75.00</p>
                            </div>
                        </div>
                        <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
                            <img src={img_produit4} width="100%" alt="" />
                            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
                            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                                <p className=" m-0">Herschel supply co 25l</p>
                                <p className=" m-0">$75.00</p>
                            </div>
                        </div>
                        <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
                            <img src={img_produit1} width="100%" alt="" />
                            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
                            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                                <p className=" m-0">Herschel supply co 25l</p>
                                <p className=" m-0">$75.00</p>
                            </div>
                        </div>

                        <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
                            <img src={img_produit2} width="100%" alt="" />
                            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
                            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                                <p className=" m-0">Herschel supply co 25l</p>
                                <p className=" m-0">$75.00</p>
                            </div>
                        </div>

                        <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
                            <img src={img_produit3} width="100%" alt="" />
                            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
                            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                                <p className=" m-0">Herschel supply co 25l</p>
                                <p className=" m-0">$75.00</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}
