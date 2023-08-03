import React from 'react';
import "../produit/produit.scss"
import "./coeur.scss"
import img1 from "../../layouts/image/img_produit/banner-1.jpg"

export const Coeur = (props) => {
    return (
        <div>
            <div className="cov-produit">
                <div className=" text-center titres text-coleur-byad bg-black d-flex justify-content-center align-items-center flex-column ">
                    <h1>COUP DE COEUR</h1>
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
                            
                            element.coeur===true?
                            
                                <>
                                
                                <tr className='border' >
                                <th >
                                    <img className='image-table' src={ element.src} alt="" />
                                </th>
                                <td className=' pt-40'>{ element.name}</td>
                                <td className=' pt-40'>{ element.prix} DH</td>
                                <td className=' pt-40'>
                                    <div className='quantiter d-flex justify-content-center'>
                                        <div className=' bg-coleur-quantiter p-1'>

                                            <button>-</button>
                                            <input className=' text-center' type="text" />
                                            <button>+</button>

                                        </div>

                                    </div>
                                </td>
                                <td className=' pt-40'>$306</td>

                            </tr>

                                </>
                                :
                                <>
                                </>
                                )
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

