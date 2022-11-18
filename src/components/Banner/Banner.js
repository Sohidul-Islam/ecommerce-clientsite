import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';
import banner1 from '../../images/banner1.png'
// import banner1 from '../../images/banner-fullwidth.jpg'
import './Banner.css'
const Banner = () => {
    const { user, logout } = useAuth();
    return (
        <div className="banner-container">
            <div className="banner-content">
                <div className="banner-img-box">
                    <img src={banner1} alt="" srcset="" />
                </div>
                <div className="banner-btn-box">
                    <div></div>
                    <div>
                        {user?.email? <Link className="btn-banner" style={{ textDecoration: "none", color: "#000", fontWeight: "800" }} to="/shop">Get Started</Link>:
                        <Link className="btn-banner" style={{ textDecoration: "none", color: "#000", fontWeight: "800" }} to="/login">Get Started</Link>
                        }
                    </div>
                </div>
            </div>

            {/* <OwlCarouselDemo /> */}
        </div>
    )
}

export default Banner