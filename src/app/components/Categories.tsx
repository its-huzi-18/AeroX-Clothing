import React from 'react'
import CategoryImages from './CategoryImages'
const Categories = () => {
  return (
    <div>
    <h2 className="text-3xl font-semibold my-10">Shopping By Categories</h2>
    <div className="flex justify-center gap-12"> 
        <CategoryImages
 imageSrc='/Images/t-shirt.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/dropShoulder.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/full-sleevesShirt.png'
 alt='t-shirt'   
 width={138}
 height={138}   
        />
        <CategoryImages
 imageSrc='/Images/half-shirt.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/cotton-t-shirt.png'
 alt='t-shirt'
 width={140}
 height={140}         
        />
    </div>
    </div>
         )
}

export default Categories;