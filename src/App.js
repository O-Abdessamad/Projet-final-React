import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import {Produit} from "./pages/produit/Produit"
import {About} from "./pages/about/About"
import {Contact} from "./pages/contact/Contact"
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";





export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />


    </>
  );
};

