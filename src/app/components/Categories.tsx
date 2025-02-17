import React from 'react'
import CategoryImages from './CategoryImages'

const Categories = () => {
  return (
    <div className="">
    <h2 className="text-3xl font-semibold my-10">Shopping By Categories</h2>
    <div className="flex justify-center gap-8"> 
        <CategoryImages
 imageSrc='/Images/my t-shirt.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/img3.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/img4.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/img5.png'
 alt='t-shirt'        
        />
        <CategoryImages
 imageSrc='/Images/cotton t-shirt.png'
 width={120}
 height={120}
 alt='t-shirt'        
        />
    </div>
    </div>
         )
}

export default Categories;