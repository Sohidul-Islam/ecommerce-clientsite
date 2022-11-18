import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProducts.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import banner1 from '../../images/banner1.png'
import shoesFeature from '../../images/artwork/shoes.png'
import teeShirtFeature from '../../images/artwork/teeshirt.png'
import bagFeature from '../../images/artwork/bag.png'
import bottleFeature from '../../images/artwork/bottle.png'
import { Link } from 'react-router-dom';
import { addCategoryToDb } from '../../utilities/fakedb';

const FeaturedProducts = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const featureProducts = [{
        highlightImage: `${shoesFeature}`,
        id: 1,
        name: 'Supernova Shoes',
        price: '$100',
        category: "Men's Sneaker",
    },
    {
        highlightImage: `${teeShirtFeature}`,
        id: 2,
        name: 'Move Feelready Sport Tee',
        price: '$100',
        category: 'Tee Shirt',
    },
    {
        highlightImage: `${bagFeature}`,
        id: 3,
        name: 'Defender Backpack',
        price: '$100',
        category: 'Bag'
    },
    {
        highlightImage: `${bottleFeature}`,
        id: 4,
        name: 'Steel Metal Bottle 1L',
        price: '$100',
        category: 'Bottle'
    },
    {
        highlightImage: `${bagFeature}`,
        id: 4,
        name: 'Defender Backpack',
        price: '$100',
        category: 'Bag'
    }
    ]

    const shopNowHandler = (category) => {
        console.log('shop now clicked')
        console.log(category)
        addCategoryToDb(category)
    }


    return (
        <div className="section">
            <h1 className="title">Featured Products</h1>
            <div id="featured-products">
                <div className="feature-container">
                    <Slider {...settings}>
                        {featureProducts.map((banner, key) => (
                            <div keys="key" >
                                <div className="feature-product">
                                    <div className="feature-product-image">
                                        <img src={banner.highlightImage} alt="" />
                                    </div>
                                    <div className="feature-product-text">
                                        <h1 className="feature-product--text-1">{banner.name}</h1>
                                        <h1 className="feature-product--text-2"><strong>Code: </strong>{banner.id}</h1>
                                        <h2 className="feature-product--text-2">{banner.price}</h2>
                                    </div>
                                    {/* <div className="feature-product-btn--box">
                                    <button className="secondary-btn">
                                        <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faCartShopping}></FontAwesomeIcon>Add to Cart
                                    </button>
                                </div> */}
                                    <div className="feature-btn--box">
                                        <Link to="/shop" onClick={() => {
                                            shopNowHandler(banner.category)
                                        }} className="feature-product--btn">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>
            </div>


        </div>

    )
}
export default FeaturedProducts;