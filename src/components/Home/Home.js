import React from 'react'
import Banner from '../Banner/Banner'
import Brand from '../Brand/Brand'
import Gallery from '../Gallery/Gallery'


const Home = () => {
    return (
        <div>
            <div className="banner-container">
                <Banner />
                <Brand />
                <Gallery text="Boot" category="Men's Boot" />
                <Gallery text="Cap" category="Cap" />
                <Gallery text="Tee shirt" category="Tee Shirt" />
                <Gallery text="Bag" category="Bag" />
                <Gallery text="Sneakers" category="Men's Sneaker" />
            </div>

        </div>
    )
}
export default Home