import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./home.scss";
import { FaPlay } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";


import img_coverture1 from "../../layouts/image/coverture.jpg"
import img_coverture2 from "../../layouts/image/coverture2.jpg"

import img_produit1 from "../../layouts/image/img_produit/img_produit1.jpeg"
import img_produit2 from "../../layouts/image/img_produit/img_produit2.jpeg"
import img_produit3 from "../../layouts/image/img_produit/img_produit3.jpeg"
import img_produit4 from "../../layouts/image/img_produit/img_produit4.jpeg"


export const Home = (props) => {

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
            <button className=" pe-20 ps-20 p-10 bg-light border-0"><Link className="text-decoration-none font-Montserrat text-dark  "> COMING SOoN </Link> </button>
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
            <button> <NavLink to={"/home/best_sellet"} className="text-decoration-none font-Montserrat text-coleur-gry-nav "> Best Seller </NavLink></button>
            <button><NavLink to={"/home/new"} className="text-decoration-none font-Montserrat text-coleur-gry-nav "> New </NavLink></button>
            <button><NavLink to={"/home/sale"} className="text-decoration-none font-Montserrat text-coleur-gry-nav "> Sale </NavLink></button>
            <button><NavLink to={"/home/old"} className="text-decoration-none font-Montserrat text-coleur-gry-nav "> Old </NavLink></button>
          </div>
        </div>

        <div className="our_products_img mt-30  d-flex justify-content-center align-items-center gap-15 flex-column flex-md-row flex-wrap">

          {
            props.produit4.map((element, index) =>
              <>
                {

                  <div className="produit_card d-flex justify-content-center align-items-center flex-column   position-relative" onMouseOut={(event2) => {
                    props.mousout(event2)
                  }} onMouseOver={(event) => {
                    props.moushover(event)
                  }}>
                    <img src={element.src} width="100%" alt="" />
                    {
                      element.tags === "new" ?
                        <>
                          <span className=" bg-coleur-span-new text-light position-absolute ">New</span>

                        </>
                        :
                        element.tags === "sale" ?
                          <>
                            <span className=" bg-coleur-span-sale text-light position-absolute ">Sale</span>

                          </>
                          :
                          <>

                          </>
                    }
                    <div className="produit_card_text bg-coleur-byad text-coleur-gry-nav w-100">
                      <p className=" m-0">{element.name}</p>
                      <p className=" m-0">${element.prix}</p>
                    </div>

                    <div className=" add-to-card  text-light  w-75 justify-content-center no-show-anemation" onClick={()=>{
                      const newPanier = [...props.panier];
                      console.log(props.panier);


                      const verifyproduit = props.panier.find(element => element.src === newPanier.src);



                      newPanier.push(props.all_produits[index]);
                      props.setPanier(newPanier);

                    }}>
                      <button className=" border-0 bg-black text-coleur-byad ps-30 pe-30 p-10 rounded-5">Add to card</button>
                    </div>
                    {
                      element.coeur === true ?
                        <>
                          <div className="icone-coeur no-show-anemation  coeurV" onClick={() => {
                            const newProduit4 = [...props.produit4];
                            newProduit4[index].coeur = false;
                            // Mettre à jour l'état avec la nouvelle valeur
                            props.setProduit4(newProduit4);
                          }}>
                            <AiFillHeart />
                          </div>
                        </>

                        :
                        <div className="icone-coeur no-show-anemation " onClick={() => {
                            const newProduit4 = [...props.produit4];
                            newProduit4[index].coeur = true;
                            // Mettre à jour l'état avec la nouvelle valeur
                            props.setProduit4(newProduit4);
                          }}>
                          <AiFillHeart />
                        </div>
                    }


                  </div>
                }
              </>
            )
          }


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
