import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Produit } from "./pages/produit/Produit";
import { Boissont } from "./pages/Boissont/Boissont";
import { Chockolat } from "./pages/Chockolat/Chockolat";
import { AllProducts } from "./pages/All_products/AllProducts";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";





// import image carocel
import cov1 from "./layouts/image/CyShop/cov1.jpg"
import cov2 from "./layouts/image/CyShop/cov2.jpg"
import cov3 from "./layouts/image/CyShop/cov3.jpg"
import cov5 from "./layouts/image/CyShop/cov5.jpg"
// end import image carocel

// import image produit
import img_canita1 from "./layouts/image/CyShop/canit1.jpg"
import img_canita2 from "./layouts/image/CyShop/canit2.jpg"
import img_canita3 from "./layouts/image/CyShop/canit3.jpg"

import img_3assir1 from "./layouts/image/CyShop/3assir1.jpg"
import img_3assir2 from "./layouts/image/CyShop/3assir2.jpg"
import img_3assir3 from "./layouts/image/CyShop/3assir3.jpg"

import img_cereales from "./layouts/image/CyShop/cereales.jpg"
import img_cereales2 from "./layouts/image/CyShop/cereales2.jpg"
import img_cereales3 from "./layouts/image/CyShop/cereales3.jpg"

import img_fanide1 from "./layouts/image/CyShop/fanide1.jpg"
import img_fanide2 from "./layouts/image/CyShop/fanide2.jpg"
import img_fanide3 from "./layouts/image/CyShop/fanide3.jpg"


// end import image produit

// carocel
class Images {
  constructor(src_image, link) {
    this.src_image = src_image;
    this.link = link;
  }
}
let image1 = new Images(cov1, "/boissont");
let image2 = new Images(cov2, "/chockolats");
let image3 = new Images(cov3, "/chockolats");
let image5 = new Images(cov5, "/boissont");

let tab_img = [image1, image2, image3, image5];
tab_img.sort(() => Math.random() - 0.5);
let new_tab_img = [tab_img[0], tab_img[1], tab_img[2], tab_img[3],];
// end carocel
// produits
class Produits {
  constructor(nom, prix, src, categorie, stock) {
    this.nom = nom;
    this.prix = prix;
    this.src = src;
    this.categorie = categorie;
    this.stock = stock;
  }
}
let canita1 = new Produits("Shwweppes", 11, img_canita1, "boissont",5)
let canita2 = new Produits("Carbac", 19, img_canita2, "boissont",15)
let canita3 = new Produits("Monster", 14, img_canita3, "boissont",8)

let _3assir1 = new Produits("Snickers", 51, img_3assir1, "boissont",5)
let _3assir2 = new Produits("Bounty", 91, img_3assir2, "boissont",4)
let _3assir3 = new Produits("Nesquik", 17, img_3assir3, "boissont",15)

let cereales = new Produits("cereales", 11, img_cereales, "chockolat",5)
let cereales2 = new Produits("cereales2", 41, img_cereales2, "chockolat",25)
let cereales3 = new Produits("cereales3", 10, img_cereales3, "chockolat",5)

let fanide1 = new Produits("fanide1", 10, img_fanide1, "chockolat",5)
let fanide2 = new Produits("fanide2", 17, img_fanide2, "chockolat",8)
let fanide3 = new Produits("fanide3", 19, img_fanide3, "chockolat",65)
let info_produits = [canita1,canita2,canita3,_3assir1,_3assir2,_3assir3,cereales,cereales2,cereales3,fanide1,fanide2,fanide3];
// end produits

// ajouter produit & supperimer
// end ajouter produit & supperimer





export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home new_tab_img={new_tab_img} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/boissont" element={<Boissont info_produits={info_produits} />} />
        <Route path="/chockolats" element={<Chockolat info_produits={info_produits} />} />
        <Route path="/all_products" element={<AllProducts info_produits={info_produits} />} />
      </Routes>

      <Footer />


    </>
  );
};

