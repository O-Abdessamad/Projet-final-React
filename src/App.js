import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import {Produit} from "./pages/produit/Produit"
import {About} from "./pages/about/About"
import {Contact} from "./pages/contact/Contact"
import {Coeur} from "./pages/coeur/Coeur"
import {Panier} from "./pages/panier/Panier"
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";

// ------------ add to card ----------

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
// ------------ end add to card ----------



export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home moushover={moushover} mousout={mousout} />} />
        <Route path="/produit" element={<Produit moushover={moushover} mousout={mousout} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coeur" element={<Coeur />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>

      <Footer />


    </>
  );
};

