import React from 'react'
import CategoryImages from './CategoryImages'

const Categories = () => {
  return (
    <div className="text-center">
    <h2 className="text-2xl font-medium my-10">Shopping By Categories</h2>
    <div className="flex justify-center gap-10"> 
        <CategoryImages
 imageSrc='/Images/my t-shirt.png'
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