import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import earphone from '../../images/artwork/topcategories/earphone.png'
import bag from '../../images/artwork/topcategories/bag.png'
import shoes from '../../images/artwork/topcategories/shoes.png'
import bottle from '../../images/artwork/topcategories/bottle.png'
import cap from '../../images/artwork/topcategories/cap.png'
import { Link } from 'react-router-dom';
import { addCategoryToDb } from '../../utilities/fakedb';
import Gallery from '../Gallery/Gallery'
import styled from 'styled-components';

const TopCategories = () => {

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

    const topCategories = [{
        highlightImage: `${earphone}`,
        category: "Earphones",
    },
    {
        highlightImage: `${bag}`,
        category: 'Bag',
    },
    {
        highlightImage: `${shoes}`,
        category: "Men's Sneaker",
    },
    {
        highlightImage: `${bottle}`,
        category: 'Bottle'
    },
    {
        highlightImage: `${cap}`,
        category: 'Cap'
    }
    ]

    const shopNowHandler = (category) => {
        console.log('shop now clicked')
        console.log(category)
        addCategoryToDb(category)
    }
    const ButtonBox = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-content: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
    `;

    const Button = styled(Link)`
    padding: 16px 40px;
    background-color: #fb2e86;
    color: #fff;
    border: none;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 600;
    font-family: "Josefin Sans", sans-serif;
    transition: all 0.8s ease-in-out;
    text-decoration: none;
    &:hover {
        background-color: #fff;
        color: #fb2e86;
        border: 1px solid #fb2e86;
    }
      `;

    const ImgBox = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
    `;
    const ImgInnerBox = styled.div`
        position:absolute;
        top: 12%;
        left: 10%;
        z-index: -1;
        width: 70%;
        height: 78%;
        border-radius: 50%;
        transition: all 0.8s ease-in-out;
    `;
    const Img = styled.img`
        width: 100%;
        height: 100%;
      
    `;
    const TopCategoriesCard = styled.div`
        position: relative;
        top: 0;
        left: 0;
        /* min-width: 270px; */
        max-width: 270px;
        /* min-height: 361px; */
        max-height: 361px;
        margin: 20px;
        /* border: 1px solid #ccc; */
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        &:hover {
        transform: translateY(-10px);
        ${ButtonBox} {
            opacity: 1;
            transform: translateY(0px);
        }
        ${ImgInnerBox} {
            background-color: #9877E7;
        }
        }
    `;

    useEffect(() => {
        console.log('use effect called')
    })
    return (
        <div className="section">
            <h1 className="title">Top Categories</h1>
            <div id="featured-products">
                <div className="feature-container">
                    <Slider {...settings}>
                        {

                            topCategories.map((banner, key) => (
                                <div keys={key} >
                                    <TopCategoriesCard>
                                        <ImgBox>
                                            <Img src={banner.highlightImage} alt="" />
                                            <ImgInnerBox>
                                            </ImgInnerBox>
                                        </ImgBox>
                                        <div className="feature-product-text">
                                            <h1 className="feature-product--text-1">{banner.category}</h1>
                                        </div>

                                        <ButtonBox>
                                            <Button to="/shop" onClick={() => {
                                                shopNowHandler(banner.category)
                                            }}>Shop Now</Button>
                                        </ButtonBox>
                                    </TopCategoriesCard>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>


        </div>
    )
}
export default TopCategories



