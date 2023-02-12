import React from 'react'
import './FacilitiesOffer.css'
import icon1 from '../../images/customicon/24-hours-support 1.png'
import icon2 from '../../images/customicon/cashback 1.png'
import icon3 from '../../images/customicon/free-delivery 1.png'
import icon4 from '../../images/customicon/premium-quality 1.png'
import styled from 'styled-components'
const FacilitiesOffer = () => {
    const size = {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
    }
    const device = {
        mobileS: `(min-width: ${size.mobileS})`,
        mobileM: `(min-width: ${size.mobileM})`,
        mobileL: `(min-width: ${size.mobileL})`,
        tablet: `(min-width: ${size.tablet})`,
        laptop: `(min-width: ${size.laptop})`,
        laptopL: `(min-width: ${size.laptopL})`,
        desktop: `(min-width: ${size.desktop})`,
        desktopL: `(min-width: ${size.desktop})`
    };
    const device2 = {
        mobileS: `(max-width: ${size.mobileS})`,
        mobileM: `(max-width: ${size.mobileM})`,
        mobileL: `(max-width: ${size.mobileL})`,
        tablet: `(max-width: ${size.tablet})`,
        laptop: `(max-width: ${size.laptop})`,
        laptopL: `(max-width: ${size.laptopL})`,
        desktop: `(max-width: ${size.desktop})`,
        desktopL: `(max-width: ${size.desktop})`
    };


    const facilities = [{
        icon: `${icon1}`,
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        icon: `${icon2}`,
        title: 'Cashback',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        icon: `${icon3}`,
        title: 'Free Delivery',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        icon: `${icon4}`,
        title: 'Premium Quality',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    ]


    const FaciliitiesContainerBox = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1200px;
        @media ${device2.mobileL}{
            flex-direction: row;
            justify-content:center;
        }
    `;

    const FaciliitiesContainer = styled.div`
        position: relative;
        top: 0;
        left: 0;
        max-width: 270px;
        max-height: 320px;
        text-align: center;
        padding: 20px;
        margin: 10px 10px;
        /* border: 1px solid #ccc; */
        border-radius: 5px;
        background-color: #fff;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: all 0.3s ease-in-out;
        &:hover{
          filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
        }
        &:first-child {
          padding: 20px;
          margin-left: 0;
        }
        &:last-child {
          padding: 20px;
          margin-right: 0;
        }

        @media ${device2.mobileL}{
            max-width: 80%;
            max-height: 320px;
            flex-direction: row;
            justify-content:center;
            margin: 10px 10%;

            &:hover{
                filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
              }
              &:first-child {
                padding: 20px;
                // margin: 0;
                margin: 10px 10%;
              }
              &:last-child {
                padding: 20px;
                margin: 10px 10%;
              }
        }
  `;



    const Faciliities = styled.div`
   
    `;
    const FaciliitiesIcon = styled.div`
        height: 65px;
        width: 65px;
        margin: 0 auto;
        & img{
            height: 100%;
            width: 100%;
        }
    `;
    const FaciliitiesText = styled.div`
        & h1{
        font-size: 20px;
        font-weight: 600;
        margin: 10px 0;
        color: #151875;
        font-family: "josefin sans", sans-serif;
        }
        & p{
        font-size: 14px;
        font-weight: 400;
        margin: 10px 0;
        font-family: "josefin sans", sans-serif;
        }
    `;

    return (
        <div style={{ marginBottom: "50px" }}>
            <h1>What Ema John Offers!</h1>
            <FaciliitiesContainerBox>
                {facilities.map((facility, key) => (
                    <FaciliitiesContainer>
                        <Faciliities>
                            <FaciliitiesIcon>
                                <img src={facility.icon} alt="" />
                            </FaciliitiesIcon>
                            <FaciliitiesText>
                                <h1>{facility.title}</h1>
                                <p>{facility.description}</p>
                            </FaciliitiesText>
                        </Faciliities>
                    </FaciliitiesContainer>
                ))}
            </FaciliitiesContainerBox>

        </div>
    )
}

export default FacilitiesOffer
