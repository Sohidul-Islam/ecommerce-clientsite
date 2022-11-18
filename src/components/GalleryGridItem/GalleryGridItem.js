import React, { useEffect, useState } from 'react';
import GalleryImage from '../GalleryImage/GalleryImage';

const GalleryGridItem = ({category}) => {
    const [products,setProducts] = useState([]);
    const [selectedCategories,setSelectedCategories] = useState(category)
    useEffect(()=>{
        // let url = `https://marvelous-dry-tortugas-02221.herokuapp.com/`;

    let url = `http://localhost:5000/`;
    if (selectedCategories !== "All") {
        url += `products?page=${0}&&size=${11}&&category=${selectedCategories}`;
    }
    else {
        url += `products?page=${0}&&size=${11}`;
    }

    console.log("Grid gallery item ",url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.products.length > 0) {
                console.log(data.products);
                setProducts(data.products)
                // const count = data.count;
            }
            else {
                console.log("No Products");
            }
        }).catch(err => {
            console.log(err.message);
        })
    },[])
  return (
    <>
        { products.map((product, key) => <GalleryImage img={product?.img}/>)}
<GalleryImage img={products[Math.floor(Math.random() * 10)]?.img}/>
<GalleryImage img={products[Math.floor(Math.random() * 10)]?.img}/>
    </>
  )
}
export default  GalleryGridItem