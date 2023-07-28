import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { Home_tags } from "./pages/home/Home_tags";
import {Produit} from "./pages/produit/Produit"
import {About} from "./pages/about/About"
import {Contact} from "./pages/contact/Contact"
import {Coeur} from "./pages/coeur/Coeur"
import {Panier} from "./pages/panier/Panier"
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";

// ---------------- images --------------
import img_produit1 from "./layouts/image/img_produit/img_produit1.jpeg"
import img_produit2 from "./layouts/image/img_produit/img_produit2.jpeg"
import img_produit3 from "./layouts/image/img_produit/img_produit3.jpeg"
import img_produit4 from "./layouts/image/img_produit/img_produit4.jpeg"
import img_produit5 from "./layouts/image/img_produit/banner-2.jpg"
import img_produit6 from "./layouts/image/img_produit/banner-1.jpg"
import img_produit7 from "./layouts/image/img_produit/banner-3.jpg"
import img_produit8 from "./layouts/image/img_produit/kids1.jpg"
import img_produit9 from "./layouts/image/img_produit/kids2.jpg"
import img_produit10 from "./layouts/image/img_produit/kids3.jpg"
import img_produit11 from "./layouts/image/img_produit/kids4.jpg"
import img_produit16 from "./layouts/image/img_produit/kids4.jpg"
import img_produit12 from "./layouts/image/img_produit/wom1.jpg"
import img_produit13 from "./layouts/image/img_produit/wom2.jpg"
import img_produit14 from "./layouts/image/img_produit/wom3.jpg"
import img_produit15 from "./layouts/image/img_produit/wom4.jpg"
// ---------------- end images --------------



// ------------ hover-produit ----------
const moushover = () => {
  let produit_cards = document.querySelectorAll(".produit_card");
  for (let index = 0; index < produit_cards.length; index++) {
    let element = produit_cards[index];
    element.addEventListener("mouseover", () => {

      element.lastElementChild.classList.remove("no-show-anemation");
      element.lastElementChild.classList.add("show-anemation");

      element.lastElementChild.previousElementSibling.classList.remove("no-show-anemation");
      element.lastElementChild.previousElementSibling.classList.add("show-anemation");

    });

  }
}
const mousout = () => {
  let produit_cards = document.querySelectorAll(".produit_card");
  for (let idx = 0; idx < produit_cards.length; idx++) {
    let e = produit_cards[idx];

    e.lastElementChild.classList.remove("show-anemation");
    e.lastElementChild.classList.add("no-show-anemation");

    e.lastElementChild.previousElementSibling.classList.remove("show-anemation");
    e.lastElementChild.previousElementSibling.classList.add("no-show-anemation");
    
  }
}
// ------------ end hover-produit ----------

export const App = () => {
  // const [prduits, setPrduits] = useState("");
  class Products {
    constructor(name , prix , tags , categorie,src){
      this.name = name ;
      this.prix = prix ;
      this.tags = tags ;
      this.categorie = categorie ;
      this.src = src ;
    }
  }

  let prod1 = new Products("polo_blue" ,120  , "best_sellet" , "men" , img_produit1);
  let prod2 = new Products("polo_blue2" ,200  , "new" , "men" , img_produit2);
  let prod3 = new Products("polo_red1" ,140  , "best_sellet" , "men" , img_produit3);
  let prod4 = new Products("polo_red2" ,150  , "old" , "men" , img_produit4);
  let prod5 = new Products("Magana2" ,150  , "best_sellet" , "accessoire" , img_produit5);
  let prod6 = new Products("chekara" ,100  , "old" , "accessoire" , img_produit7);
  let prod7 = new Products("Magana" ,100  , "new" , "accessoire" , img_produit5);
  let prod8 = new Products("t-shirt-kids2" ,100  , "old" , "kids" , img_produit8);
  let prod9 = new Products("t-shirt-kids3" ,180  , "sale" , "kids" , img_produit9);
  let prod10 = new Products("t-shirt-kids4" ,180  , "best_sellet" , "kids" , img_produit10);
  let prod11 = new Products("t-shirt-kids4" ,180  , "best_sellet" , "women" , img_produit12);
  let prod12 = new Products("t-shirt-women1" ,70  , "sale" , "women" , img_produit12);
  let prod13 = new Products("t-shirt-women2" ,130  , "old" , "women" , img_produit14);
  let prod14 = new Products("t-shirt-women3" ,170  , "best_sellet" , "women" , img_produit13);
  let prod15 = new Products("t-shirt-women4" ,270  , "sale" , "women" , img_produit15);
  let prod16 = new Products("Ndader" ,100  , "old" , "accessoire" , img_produit6);

  let all_produits = [prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9,prod10,prod11,prod12,prod13,prod14,prod15,prod16,];
  all_produits.sort(() => Math.random() - 0.5);

  let produit4=[all_produits[0],all_produits[1],all_produits[2],all_produits[3],]


  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home moushover={moushover} mousout={mousout} all_produits={all_produits} produit4={produit4}/>} />
        <Route path="/home/:tags" element={<Home_tags moushover={moushover} mousout={mousout} all_produits={all_produits} produit4={produit4}/>} />
        <Route path="/produit" element={<Produit moushover={moushover} mousout={mousout} all_produits={all_produits}  />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coeur" element={<Coeur />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>

      <Footer />


    </>
  );
};

