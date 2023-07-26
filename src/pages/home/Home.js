import React from "react";
import { NavLink } from "react-router-dom";
import "./home.scss"


export const Home = (props) => {




  return (
    <>
      <div className="container">
        <div className="container">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <NavLink to={props.new_tab_img[1].link}>
                  <img src={props.new_tab_img[1].src_image} className="d-block w-100 carosel-img" alt="111" />
                </NavLink>
              </div>
              {
                props.new_tab_img.map((element => (
                  <div className="carousel-item">
                    <NavLink to={element.link}>
                      <img src={element.src_image} className="d-block w-100 carosel-img" alt="111" />
                    </NavLink>
                  </div>
                )))
              }
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>


    </>
  );
};
