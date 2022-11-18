import React from 'react'
import Banner from '../Banner2/Banner'
import Carousel from '../Carousel/Carousel'
import FacilitiesOffer from '../FacilitiesOffer/FacilitiesOffer'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import Footer from '../Footer/Footer'
import TopCategories from '../TopCategories/TopCategories'


const Home = () => {
    return (
        <div>
            <Carousel />
            <FeaturedProducts />
            <FacilitiesOffer />
            <Banner />
            <TopCategories />
            <Footer />
        </div>
    )
}
export default Home