import React from 'react'
import CategoryImages from './CategoryImages'
const Categories = () => {
  return (
    <div>
    <h2 className="text-3xl font-semibold my-10">Shopping By Categories</h2>
    <div className="flex justify-center gap-8"> 
        <div className='flex flex-col gap-4 items-center'>
        <CategoryImages
 imageSrc='/Images/t-shirt.png'
 alt='t-shirt'        
 />
 <h2 className='text-lg font-semibold text-gray-700'>Drifit T-shirts</h2>
 </div>
 <div className='flex flex-col gap-4 items-center'>
        <CategoryImages
 imageSrc='/Images/dropShoulder.png'
 alt='t-shirt'        
 />
  <h2 className='text-lg font-semibold text-gray-700'>Drop Shoulder</h2>

 </div>
 <div className='flex flex-col gap-4 items-center'>
        <CategoryImages
 imageSrc='/Images/full-sleevesShirt.png'
 alt='t-shirt'   
 width={138}
 height={138}   
 />
   <h2 className='text-lg font-semibold text-gray-700'>Full-Sleeves</h2>

 </div>
 <div className='flex flex-col gap-4 items-center'>
        <CategoryImages
 imageSrc='/Images/half-shirt.png'
 alt='t-shirt'        
 />
    <h2 className='text-lg font-semibold text-gray-700'>Polo Shirts</h2>

 </div>
 <div className='flex flex-col gap-4 items-center'>
        <CategoryImages
 imageSrc='/Images/cotton-t-shirt.png'
 alt='t-shirt'
 width={140}
 height={140}         
 />
     <h2 className='text-lg font-semibold text-gray-700'>T-Shirts</h2>

 </div>
    </div>
    </div>
         )
}

export default Categories;