import React from 'react';
import photo1 from '../img/photo1.jpg';
import photo2 from '../img/photo2.jpg';
import photo3 from '../img/photo3.jpg';

const Carousel = (props) => {
    return(
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={photo1} className="rounded mx-auto d-block photo1 .center-block" alt="фото" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Дружный коллектив</h2>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={photo2} className="rounded mx-auto d-block photo2" alt="фото" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Спорт каждый день</h2>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={photo3} className="rounded mx-auto d-block photo3" alt="фото" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Море детских улыбок</h2>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    )
}

export default Carousel;