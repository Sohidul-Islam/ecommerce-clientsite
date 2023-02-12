import React from 'react'
import Banner2 from '../../images/banner2.png'
import product1 from '../../images/artwork/teeshirt2.png'
import styled from 'styled-components';

const Banner = () => {

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

    const FlexibleDiv1 = styled.div`
position: relative;
top: 0;
left: 0;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;

`;
    const FlexibleDiv2 = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
width: 100%;
height: 100%;

`;
    const HalfWidthDiv = styled.div`
width: 50%;

@media ${device2.mobileL}{
    width: 100%;
}
`;

    const TextBox = styled.div`
position: relative;
top: 0;
left: 0;
width: 80%;
height: 100%;
margin-right:20%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: start;

@media ${device2.mobileL}{
    text-align: center;
    margin:0% 10%;
    justify-content: center;
}
`;

    const Button = styled.button`
    padding: 16px 40px;
    background-color: #fb2e86;
    color: #fff;
    border: none;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 600;
    font-family: "Josefin Sans", sans-serif;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        background-color: #fff;
        color: #fb2e86;
        border: 1px solid #fb2e86;
    }
`

    const BacgroundImage = styled.img` 
    width: 100%;
    // height: 700px;

    @media ${device2.desktopL}{
        height: 500px;
    }
    @media ${device2.mobileL}{
        height: 700px;
    }
`;

    return (
        <FlexibleDiv1>
            <BacgroundImage src={Banner2} alt="Banner" />
            <FlexibleDiv2>
                <HalfWidthDiv>
                    <img src={product1} alt="Product" style={{ width: "60%", margin: "0 20%", padding: "40px 0px" }} />
                </HalfWidthDiv>
                <HalfWidthDiv>
                    <TextBox className="text-box">
                        <h1>Summer Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, sed aliquet nisl lorem quis nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, sed aliquet nisl lorem quis nisl.</p>
                        <Button>Shop Now</Button>
                    </TextBox>
                </HalfWidthDiv>
            </FlexibleDiv2>


        </FlexibleDiv1>
    )
}
export default Banner