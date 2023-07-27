import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./home.scss";
import { FaPlay } from "react-icons/fa";

import img_coverture1 from "../../layouts/image/coverture.jpg"
import img_coverture2 from "../../layouts/image/coverture2.jpg"

import img_produit1 from "../../layouts/image/img_produit/img_produit1.jpeg"
import img_produit2 from "../../layouts/image/img_produit/img_produit2.jpeg"
import img_produit3 from "../../layouts/image/img_produit/img_produit3.jpeg"
import img_produit4 from "../../layouts/image/img_produit/img_produit4.jpeg"


export const Home = () => {




  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <NavLink to={"/"} className={"text-decoration-none font-Montserrat text-light  "}>
              <img src={img_coverture1} className="d-block w-100 carosel-img" alt="111" />
              <div className="cover-text position-absolute text-center ">
                <h2 className=" m-0 fw-bold pb-20 border-5 border-bottom border-light"> Leather Bags</h2>
                <p className=" m-0 font-Montserrat2 text-light mt-20 mb-20 pb-30">New Collection 2018</p>
                <Link className="text-decoration-none font-Montserrat text-dark pe-30 ps-30 p-20 bg-light rounded-5"> Shop Now</Link>
              </div>
            </NavLink>
          </div>
          <div className="carousel-item position-relative">
            <NavLink to={"/"} className={"text-decoration-none font-Montserrat text-light  "}>
              <img src={img_coverture2} className="d-block w-100 carosel-img" alt="111" />
              <div className="cover-text position-absolute text-center ">
                <h2 className=" m-0 fw-bold pb-20 border-5 border-bottom border-light"> Leather Bags</h2>
                <p className=" m-0 font-Montserrat2 text-light mt-20 mb-20 pb-30">New Collection 2018</p>
                <Link className="text-decoration-none font-Montserrat text-dark pe-30 ps-30 p-20 bg-light rounded-5"> Shop Now</Link>
              </div>
            </NavLink>
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className=" d-flex justify-content-center align-items-center flex-column mt-30 pt-30 mb-30 pb-30">
        <div className="card-coming d-flex justify-content-center align-items-center gap-15 flex-column flex-md-row">
          <div className="coming_card card1 d-flex justify-content-center align-items-end pb-30">
            <button className=" pe-20 ps-20 p-10 bg-light border-0"><Link className="text-decoration-none font-Montserrat text-dark  "> COMING SOON </Link> </button>
          </div>
          <div className="coming_card card2 d-flex justify-content-center align-items-end pb-30">
            <button className=" pe-20 ps-20 p-10 bg-light border-0"><Link className="text-decoration-none font-Montserrat text-dark  "> COMING SOON </Link> </button>
          </div>
          <div className="coming_card card3 d-flex justify-content-center align-items-end pb-30">
            <button className=" pe-20 ps-20 p-10 bg-light border-0"><Link className="text-decoration-none font-Montserrat text-dark  "> COMING SOON </Link> </button>
          </div>
        </div>

        <div className="our_products_text mt-30 pt-30">
          <h1 className=" fw-bold text-center">OUR PRODUCTS</h1>
          <div className="bottons d-flex  justify-content-between align-items-center mt-20 ms-5 p-10 ">
            <button>Best Seller</button>
            <button>New</button>
            <button>Sale</button>
            <button>Old</button>
          </div>
        </div>

        <div className="our_products_img mt-30  d-flex justify-content-center align-items-center gap-15 flex-column flex-md-row flex-wrap">

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

          <div className="produit_card  d-flex justify-content-center align-items-center flex-column   position-relative">
            <img src={img_produit4} width="100%" alt="" />
            <span className=" bg-coleur-span-new text-light position-absolute ">New</span>
            <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
              <p className=" m-0">Herschel supply co 25l</p>
              <p className=" m-0">$75.00</p>
            </div>
          </div>

        </div>
      </section>
      <div className="cov2">
        <div className="titres text-coleur-byad bg-black d-flex justify-content-center align-items-center flex-column">
          <h3>The Beauty</h3>
          <h1>LOOKBOOK</h1>
          <p> <FaPlay></FaPlay> PLAY VIDEO</p>
        </div>

      </div>

    </>
  );
};
