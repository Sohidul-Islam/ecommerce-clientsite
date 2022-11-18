import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faShirt, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/Logo 1.png';
import logo2 from '../../images/favicon.ico';
import './VerticalMenu.css'
// width: ${() => { return isClicked ? "10%" : "30%" }};


const VerticalMenuItem = styled.div`
border-bottom: 1px solid #ccc;
`;

const VerticalMenuHeader = styled.div`
font-size: 32px;
font-weight: 700;
padding-bottom: 20px;
// padding-top: 20px;
// padding-right: 40px;
// margin-bottom: 20px;
width: 100%;
border-bottom: 1px solid #ccc;
`;

const VerticalMenuList = styled.div`
text-decoration: none;
`;
const VerticalMenuLink = styled(Link)`
text-decoration: none;
display:block;
font-size: 20px;
color: #000;
padding: 10px 0;
transition: all 0.3s ease-in-out;
&:hover{
    color: #fff;
    background-color: #FB2E86;
    padding: 10px 8px;
    border-radius: 5px;
}
`;

const Button = styled.button`
background-color: #f2f0ff;
border: 1px solid #000;
color: black;
padding: 8px 16px;
margin-right:40px;
text-align: center;
text-decoration: none;
display: inline-block;
border-radius: 5px;
float: right;
`;

const Button2 = styled.button`
background-color: #000;
border: none;
color: white;
padding: 8px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
border-radius: 5px;
// position: absolute;
// top: 9%;
// left: 5%;
border: 1px solid #ccc;
`;
const VerticalMenu = () => {
    const [isClicked, setIsClicked] = useState(true);
    const [className, setClassName] = useState('vertical-menu-lg');


    const MenuHandler = () => {
        console.log("clicked");
        setIsClicked(!isClicked);
        console.log(isClicked);
        if (isClicked) {
            setClassName('vertical-menu-sm');
        } else {
            setClassName('vertical-menu-lg');
        }
    }

    return (
        <div>
            <div className={className} onClick={MenuHandler}>
                <VerticalMenuItem>
                    {/* <Button onClick={MenuHandler}>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: "24px" }} />
                    </Button>
                    <br /> */}
                    <VerticalMenuHeader>
                        {isClicked ? <img src={logo} style={{ width: "100%", margin: "0px auto" }} alt="logo" />
                            : <img src={logo2} style={{ width: "100%", margin: "0px auto" }} alt="logo" />}
                    </VerticalMenuHeader>
                    <VerticalMenuList>
                        <VerticalMenuLink to="/" className={className + "-item"}>
                            <i style={{ paddingRight: "10px" }}> <FontAwesomeIcon icon={faHouse} style={{ fontSize: "24px" }} /></i>
                            {isClicked && <p style={{ display: "inline-block", margin: "0px" }}>Home</p>}</VerticalMenuLink>
                        <VerticalMenuLink to="/manage-inventory/products" className={className + "-item"}>
                            <i style={{ paddingRight: "10px" }}> <FontAwesomeIcon icon={faShirt} style={{ fontSize: "24px" }} /></i>
                            {isClicked && <p style={{ display: "inline-block", margin: "0px" }}>Products</p>}</VerticalMenuLink>
                        <VerticalMenuLink to="/manage-inventory/orders" className={className + "-item"}>
                            <i style={{ paddingRight: "10px" }}> <FontAwesomeIcon icon={faTruckFast} style={{ fontSize: "24px" }} /></i>
                            {isClicked && <p style={{ display: "inline-block", margin: "0px" }}>Orders</p>}</VerticalMenuLink>
                        <VerticalMenuLink to="/manage-inventory/users" className={className + "-item"}>
                            <i style={{ paddingRight: "10px" }}> <FontAwesomeIcon icon={faUser} style={{ fontSize: "24px" }} /></i>
                            {isClicked && <p style={{ display: "inline-block", margin: "0px" }}>Users</p>}</VerticalMenuLink>
                    </VerticalMenuList>
                </VerticalMenuItem>
            </div>
            {/* :
            <Button2>
                <FontAwesomeIcon onClick={MenuHandler} icon={faBars} style={{ fontSize: "24px" }} />
            </Button2> */}
        </div>
    )
}
export default VerticalMenu;