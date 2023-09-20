import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import React from 'react';
import "./produit.scss"
import "../home/home.scss"



export const Produit = (props) => {
    let nomP = 0;
    for (let index = 0; index <  props.all_produits.length; index++) {
        nomP+=1;        
    }
    console.log(nomP);
    
    
    for (let index = 0; index <  props.all_produits.length; index++) {
        let element =  props.all_produits[index];
        console.log(element.tags);

        
    }
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
                    <NavLink to={"/produit"} className={"text-decoration-none font-Montserrat text-coleur-gry-nav "}>All</NavLink>
                    <NavLink to={"/produit/women"} className={"text-decoration-none font-Montserrat text-coleur-gry-nav"}>Women</NavLink>
                    <NavLink to={"/produit/kids"} className={"text-decoration-none font-Montserrat text-coleur-gry-nav"}>Kids</NavLink>
                    <NavLink to={"/produit/men"} className={"text-decoration-none font-Montserrat text-coleur-gry-nav"}>Men</NavLink>
                    <NavLink to={"/produit/accessoire"} className={"text-decoration-none font-Montserrat text-coleur-gry-nav"}>Accessoire</NavLink>
                    <h3 className=" fw-bolder fs-2 mt-lg-10">Filter</h3>
                    <div className="div-search  border border-1 p-20 d-flex align-items-center gap-10 ">
                        <input className=" border border-0" type="text" placeholder="Search Products..." />
                        <BiSearch className="BiSearch" />
                    </div>

                </div>

                <div className=' me-lg-30  pe-lg-30 produits '>
                    <p className="font-Montserrat text-coleur-gry-nav text-end me-lg-30  pe-lg-30">Nombre de produit search : {nomP} all</p>
                    <div className=" me-lg-40  pe-lg-40 our_products_img mt-30  d-flex justify-content-center align-items-center gap-5 flex-column flex-md-row flex-wrap">
                        {
                            props.all_produits.map((element, index) =>
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

                                                <div className=" add-to-card  text-light  w-75 justify-content-center no-show-anemation" onClick={() => {
                                                    props.panier(props.all_produits, props.setAll_produits, index);
                                                }}>
                                                    <button className=" border-0 bg-black text-coleur-byad ps-30 pe-30 p-10 rounded-5">Add to card</button>
                                                </div>
                                                {
                                                    element.coeur === true ?
                                                        <>
                                                            <div className="icone-coeur no-show-anemation  coeurV" onClick={() => {
                                                                const newall_produits = [...props.all_produits];
                                                                newall_produits[index].coeur = false;
                                                                // Mettre à jour l'état avec la nouvelle valeur
                                                                props.setAll_produits(newall_produits);
                                                            }}>
                                                                <AiFillHeart />
                                                            </div>
                                                        </>

                                                        :
                                                        <div className="icone-coeur no-show-anemation " onClick={() => {
                                                            const newall_produits = [...props.all_produits];
                                                            newall_produits[index].coeur = true;
                                                            // Mettre à jour l'état avec la nouvelle valeur
                                                            props.setAll_produits(newall_produits);
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
                </div>
            </div>

        </div>
    );
}

