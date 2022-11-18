import React from 'react'
import './FacilitiesOffer.css'
import icon1 from '../../images/customicon/24-hours-support 1.png'
import icon2 from '../../images/customicon/cashback 1.png'
import icon3 from '../../images/customicon/free-delivery 1.png'
import icon4 from '../../images/customicon/premium-quality 1.png'
const FacilitiesOffer = () => {

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
    return (
        <div style={{ marginBottom: "50px" }}>
            <h1 className="title">What Ema John Offers!</h1>
            <div className="faciliities-container-box">
                {facilities.map((facility, key) => (
                    <div className="faciliities-container">
                        <div className="facilities">
                            <div className="facilities-icon">
                                <img src={facility.icon} alt="" />
                            </div>
                            <div className="facilities-text">
                                <h1>{facility.title}</h1>
                                <p>{facility.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FacilitiesOffer
