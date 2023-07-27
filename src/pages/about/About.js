import React from 'react';
import "../produit/produit.scss"
import img_about from "../../layouts/image/cov2.png"

export const About = () => {
    return (
        <div>
            <div className="cov-produit">
                <div className="titres text-coleur-byad bg-black d-flex justify-content-center align-items-center flex-column ">
                    <h1>ABOUT</h1>
                </div>
            </div>
            <div className='about d-flex justify-content-center align-items-center align-items-lg-start mt-40 mb-40  flex-column flex-lg-row '>
                <div className="image-about">
                    <img src={img_about} alt="" />
                </div>
                <div className='texte-about p-30'>
                    <h2 >Our story</h2>
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis veniam maiores expedita quibusdam consequatur eius, cumque distinctio reprehenderit facere libero debitis, in at consectetur maxime alias repudiandae laudantium, quos cupiditate nam! Distinctio esse velit recusandae sequi rem enim voluptates delectus qui vitae. Molestiae repellat, dicta cumque, illum natus tenetur aut reprehenderit cupiditate ipsam, ipsum magni iure repudiandae sequi odio exercitationem officia modi temporibus! Neque a magnam dolorum dicta! Nihil ut distinctio consequuntur voluptatum error vitae nesciunt quae numquam ipsam, libero possimus ratione sequi iste ipsum, sed delectus nobis laborum. Fuga explicabo assumenda ullam dolorum dolore reiciendis, optio obcaecati. Nam, dolorem.</p>
                    <p className=' ms-10 ps-15 border-start border-3  border-coleur-gry-nav'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sit provident ducimus ipsam impedit, obcaecati officiis cumque quidem, necessitatibus earum dolor eveniet! Voluptatem, eius. A tempore optio labore iste cupiditate!</p>
                </div>

            </div>
        </div>
    );
}

