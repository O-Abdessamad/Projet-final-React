import React, { useState } from "react";
import "./produit.scss"
import { Header } from "../../layouts/Header";
import { Footer } from "../../layouts/Footer";
import img1 from "../../layouts/image/img1.png";

export const Produit = () => {
    const [valueinput1,setvalueinput]=useState(0);
    const [count, setcount] = useState(0);


    const input = (event) =>{
        console.log(event.target.value);
        setvalueinput(event.target.value);
    }

    const plus = () => {
        setcount(count + 1);
        console.log(count);
      }
      const minus = () => {
        if (count>0) {
            setcount(count - 1);
        console.log(count);
        } else{
            setcount(count );
        }
        
      }
    return (
        <>
            <Header />
            <div className="contenu-produit d-flex  justify-content-around   mt-4 ">
                <div className="produit bg-secondary p-10 d-flex flex-column align-items-center gap-10">
                    <img className="produit-img" src={img1} alt="" />
                    <div className="quantiter d-flex gap-20">
                        <button className="btn btn-info" onClick={plus}>+</button>
                        <input className=" text-center" type="text" value={count} onChange={(event) => {
                            input(event)
                        }} />
                        <button className="btn btn-info" onClick={minus}>-</button>
                    </div>
                    <button className="btn btn-success">add to cart</button>

                </div>
                <div className="description bg-secondary p-10 d-flex flex-column align-items-center text-center">
                    <h1>Produit</h1>
                    <p className=" w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error tempore sit temporibus et, reiciendis alias obcaecati omnis placeat expedita illo corporis perferendis eum ullam animi. Nostrum vitae labore earum cupiditate distinctio obcaecati nobis magnam natus sed commodi recusandae adipisci sint, nihil accusamus temporibus quasi ut doloremque quas! Repudiandae, dolorem!</p>
                </div>

            </div>
            <Footer />
        </>
    );
};
