import React from 'react'
import StylishShirt from './ImagesStyle'

const NewArrival = () => {
  return (
    <>
    <div className='flex mt-16 mb-10  gap-3 flex-col justify-center items-center'>
    <div className='flex justify-center items-center gap-10'>
    <div className='w-48 h-[3px] bg-black'></div>
        <h2 className='text-3xl font-bold'>
   NEW ARRIVALS
        </h2>
        <div className='w-48 h-[3px] bg-black'></div>
        {/* <h3 className='text-3xl font-semibold text-[#9B9B9B]'>Best Seller</h3>
        <h3 className='text-3xl font-semibold text-[#9B9B9B]'>Sale</h3> */}
    </div>
    <button className='text-xl  border-b-2 border-black/70'>View All</button>
        </div>
    <div className='flex justify-center gap-7 my-8 flex-wrap items-center'>
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/model-4.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/arrival-2.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/model-3.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/arrival-1.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/logo.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/logo.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/logo.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/logo.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/logo.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/logo.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/logo.png'
        />
        <StylishShirt 
        alt='shirt'
        imageSrc='/Images/logo.png'
        />
        {/* <div className='w-[260px] h-[340px] bg-[#ececec]'>
        </div> */}
    </div>
    </>
  )
}

export default NewArrival