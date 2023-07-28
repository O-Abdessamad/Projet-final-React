import React from 'react';
import "../produit/produit.scss"
import "../coeur/coeur.scss"
import img1 from "../../layouts/image/img_produit/banner-1.jpg"

export const Panier = () => {
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
                            <tr className=' border' >
                                <th >
                                    <img className='image-table' src={img1} alt="" />
                                </th>
                                <td className=' pt-40'>Men Tshirt</td>
                                <td className=' pt-40'>$36</td>
                                <td className=' pt-40'>
                                    <div className='quantiter d-flex justify-content-center'>
                                        <div className=' bg-coleur-quantiter p-1'>

                                            <button>-</button>
                                            <input type="text" />
                                            <button>+</button>

                                        </div>

                                    </div>
                                </td>
                                <td className=' pt-40'>$306</td>

                            </tr>
                            <tr className=' border'>
                                <th >
                                    <img className='image-table' src={img1} alt="" />
                                </th>
                                <td className=' pt-40'>Men Tshirt</td>
                                <td className=' pt-40'>$36</td>
                                <td className=' pt-40'>
                                    <div className='quantiter d-flex justify-content-center'>
                                        <div className=' bg-coleur-quantiter p-1'>

                                            <button>-</button>
                                            <input type="text" />
                                            <button>+</button>

                                        </div>

                                    </div>
                                </td>
                                <td className=' pt-40'>$306</td>

                            </tr>
                            <tr className=' border'>
                                
                                <td colspan="5" className=' pt-40 '>
                                    <button className=' text-light bg-black ps-30 pe-30 p-10 border-0 rounded-5'>
                                        PROCEED TO PAYMENT
                                    </button>
                                </td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

