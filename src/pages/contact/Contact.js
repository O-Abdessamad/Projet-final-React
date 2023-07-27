import React from 'react';
import "./contact.scss"
import "../produit/produit.scss"

export const Contact = () => {
    return (
        <>
            <div className="cov-produit">
                <div className="titres text-coleur-byad bg-black d-flex justify-content-center align-items-center flex-column ">
                    <h1>CONTACT</h1>
                </div>
            </div>

            <div className=' d-flex justify-content-center align-items-center flex-column flex-md-row mt-40 mb-40 gap-15 p-25'>
                <div className='conatact-map bg-black'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26591.554928050376!2d-7.553014603903543!3d33.5807937171394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sfr!2sma!4v1690478198758!5m2!1sfr!2sma" width="100%" height="100%" frameborder="0" />
                </div>
                <div className='conatact-map'>
                    <h2 className='font-Montserrat2 fw-bold text-coleur-gry-nav mt-30'>Send us your message</h2>
                    <div className="mb-20 mt-30">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Full Nam"
                        />
                    </div>
                    <div className="mb-20">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="mb-20">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="mb-20">
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={5}
                            defaultValue={""}
                            placeholder="Message"

                        />
                    </div>
                    <button className=' text-light bg-black ps-30 pe-30 p-10 border-0 rounded-5'>
                        SEND
                    </button>

                </div>
            </div>
        </>

    );
}

