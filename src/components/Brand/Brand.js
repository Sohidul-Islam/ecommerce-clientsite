import React from 'react'
import img1 from '../../images/brand/1.png'
import img2 from '../../images/brand/2.png'
import img3 from '../../images/brand/3.png'
import img4 from '../../images/brand/4.png'
import img5 from '../../images/brand/5.png'
import img6 from '../../images/brand/6.png'
import img7 from '../../images/brand/7.png'
import img8 from '../../images/brand/8.png'
import img9 from '../../images/brand/9.png'
import './Brand.css'
const Brand = ()=>{
  return (
    <div className="brand-container">
    <div className="brand-container-box">
        <div className="brand-img-box">
        <img src={img1}/>
            </div>
        <div className="brand-img-box">
        <img src={img2}/>
            </div>
        <div className="brand-img-box">
        <img src={img3}/>
            </div>
        <div className="brand-img-box">
        <img src={img4}/>
            </div>
        <div className="brand-img-box">
        <img src={img5}/>
            </div>
        <div className="brand-img-box">
        <img src={img6}/>
            </div>
        <div className="brand-img-box">
        <img src={img7}/>
            </div>
        {/* <div className="brand-img-box">
        <img src={img8}/>
            </div>
        <div className="brand-img-box">
        <img src={img9}/>
            </div> */}
        </div>
    </div>
    
  )
}
export default Brand;
