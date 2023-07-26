import React from 'react';

export const AllProducts = (props) => {
    return (
        <div>
            <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: "relative" }}>
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">

                    {
                        props.info_produits.map(element => (
                            <>
                                {
                                        <>
                                            <div className="col hp">
                                                <div className="card h-100 shadow-sm">
                                                    <img src={element.src} className="card-img-top" alt="product.title" />
                                                    <div className="card-body text-center">
                                                        <h1>{element.nom}</h1>
                                                        <div className=' d-flex justify-content-center align-items-center gap-10'>
                                                            <button className=' bg-primary text-light border border-primary'>-</button>
                                                            <input type="text" />
                                                            <button className=' bg-primary text-light border border-primary '>+</button>

                                                        </div>

                                                        <div className="d-grid gap-2 my-4 mt-15">
                                                            <a href="#" className="btn btn-warning bold-btn">
                                                                add to cart
                                                            </a>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                       
                                }


                            </>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

