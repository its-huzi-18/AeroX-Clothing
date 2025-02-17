import React from 'react'
import StylishShirt from './ImagesStyle'

const NewArrival = () => {
  return (
    <>
    <div className='flex items-center gap-10'>
        <h2 className='text-3xl font-semibold'>
   New Arrivals
        </h2>
        <h3 className='text-3xl font-semibold text-[#9B9B9B]'>Best Seller</h3>
        <h3 className='text-3xl font-semibold text-[#9B9B9B]'>Sale</h3>
    </div>
    <div className='flex justify-center gap-4 my-10 flex-wrap'>
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/arrival-1.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/arrival-2.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/arrival-3.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/arrival-4.png'
        />
        {/* <div className='w-[260px] h-[340px] bg-[#ececec]'>
        </div> */}
    </div>
    </>
  )
}

export default NewArrival