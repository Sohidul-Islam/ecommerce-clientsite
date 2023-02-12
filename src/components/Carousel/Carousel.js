import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"
import banner1 from '../../images/banner1.png'
import shoesHighlight1 from '../../images/artwork/shoes1.png'
import teeShirtHighlight2 from '../../images/artwork/teeshirt1.png'
import bagHighlight3 from '../../images/artwork/bag1.png'
import { Link } from 'react-router-dom';
import { addCategoryToDb } from '../../utilities/fakedb';
import styled from 'styled-components';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        // cssEase: "linear"
    }
    const banner = [{
        backgroundImage: `${banner1}`,
        highlightImage: `${shoesHighlight1}`,
        text1: 'Best Shoes For Your Modern Life....',
        text2: 'New Shoes Collection Trends in 2022',
        text3: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: "Men's Sneaker",
    },
    {
        backgroundImage: `${banner1}`,
        highlightImage: `${teeShirtHighlight2}`,
        text1: 'Best Tee Shirt For Your Modern Life....',
        text2: 'New Tee Shirt Collection Trends in 2022',
        text3: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Tee Shirt',
    },
    {
        backgroundImage: `${banner1}`,
        highlightImage: `${bagHighlight3}`,
        text1: 'Best Bag For Your Modern Life....',
        text2: 'New Bag Collection Trends in 2022',
        text3: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Bag'
    },
    ]
    const shopNowHandler = (category) => {
        console.log('shop now clicked')
        console.log(category)
        addCategoryToDb(category)
    }


    const Title = styled.p`
    
    
    `;

    return (
        <div>
            <Slider {...settings}>
                {banner.map((banner, key) => (
                    <div keys="key" >
                        <div className="banner-container">
                            <div className="banner-content">
                                <div className="banner-img-box">
                                    <img src={banner.backgroundImage} alt="" srcset="" />
                                </div>
                                <div className="carousel-content--box">
                                    <div className="carousel-content" id="carousel-partition-1">
                                        <div className="carousel-text-container">
                                            <div className="carousel-text--box">
                                                <p className="carousel-text1">{banner.text1}</p>
                                                <h2 className="carousel-text2">{banner.text2}</h2>
                                                <p className="carousel-text3">{banner.text3}</p>

                                            </div>
                                            <div className="carousel-btn--box">
                                                <Link to="/shop" onClick={() => {
                                                    shopNowHandler(banner.category)
                                                }} className="secondary-btn">Shop Now</Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="carousel-content" id="carousel-partition-2">
                                        <img src={banner.highlightImage} alt="" style={{ width: "90%", paddingRight: "10%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    )
}
export default Carousel