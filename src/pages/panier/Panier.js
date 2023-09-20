import React, { useState } from 'react';
import "../produit/produit.scss"
import "../coeur/coeur.scss"

export const Panier = (props) => {
    const sfpanier = (qut, panier) => {

    }

    const [valueinput, setvalueinput] = useState("");
    const input = (event) => {
        console.log(event.target.value);
        setvalueinput(event.target.value);
    }

    let prixtotal = 0;

    return (
        <div>
            <div className="cov-produit">
                <div className=" text-center titres text-coleur-byad bg-black d-flex justify-content-center align-items-center flex-column ">
                    <h1>PANIER</h1>
                </div>
                <div className='cards-produits container d-flex justify-content-center'>
                    <table className="table text-center mt-40 mb-40 ">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">PRODUIT</th>
                                <th scope="col">PRIX</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                props.all_produits.map((element, index) =>

                                    element.panier === true ?
                                        <>
                                            <tr valign="middle" className='border produit_panier'>
                                                <th >
                                                    <img className='image-table' src={element.src} alt="" />
                                                </th>
                                                <td>{element.name} </td>
                                                <td>{element.prix} </td>
                                                <td>
                                                    <div className='quantiter d-flex justify-content-center'>
                                                        <div className=' bg-coleur-quantiter p-1'>

                                                            <button onClick={() => {

                                                                const newall_produits = [...props.all_produits];

                                                                newall_produits[index].qut > 1 ? newall_produits[index].qut -= 1 : newall_produits[index].qut = props.all_produits[index].qut;
                                                                // Mettre à jour l'état avec la nouvelle valeur
                                                                props.setAll_produits(newall_produits);

                                                            }}>-</button>
                                                            <input className=' text-center' type="text" value={element.qut} />
                                                            <button onClick={() => {

                                                                const newall_produits = [...props.all_produits];
                                                                newall_produits[index].qut += 1;
                                                                // Mettre à jour l'état avec la nouvelle valeur
                                                                props.setAll_produits(newall_produits);

                                                            }}>+</button>

                                                        </div>

                                                    </div>
                                                </td>
                                                <td>{(element.prix) * (element.qut)} DH</td>
                                                <p className=' d-none'>
                                                    {
                                                        prixtotal = prixtotal + ((element.prix) * (element.qut))
                                                    }
                                                </p>
                                                <td>
                                                    <button className="btn btn-dark rounded-4" onClick={() => {
                                                        const newall_produits = [...props.all_produits];

                                                        newall_produits[index].qut = 0;
                                                        newall_produits[index].panier = false;
                                                        // Mettre à jour l'état avec la nouvelle valeur
                                                        props.setAll_produits(newall_produits);

                                                    }}> Supperimer</button>
                                                </td>


                                            </tr>

                                        </>
                                        :
                                        <>


                                        </>
                                )
                            }
                            <tr valign="middle" className=' border '>
                                <td colspan="5" >
                                    <button className=' text-light bg-black ps-30 pe-30 p-10 border-0 rounded-5'>
                                        PROCEED TO PAYMENT
                                    </button>

                                </td>
                                <td>
                                    Total a payer : {prixtotal} Dh
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

