import React from 'react'

 const GalleryImage=({img})=>{
    console.log("ami ekhane image peyechi: ",img);
  return (
    <img src={img}/>
  )
}
export default GalleryImage