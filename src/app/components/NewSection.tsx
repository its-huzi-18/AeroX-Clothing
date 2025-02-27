import React from 'react'
import StylishShirt from './ImagesStyle'

const NewSection = () => {
  return (
  <div className='my-10'>
    <div className='text-center'>
        <h2 className='font-bold text-3xl tracking-widest my-2'>NEW</h2>
        <button className=' rounded-3xl border-[1px] px-4 hover:border-gray-800 py-[6px] text-black/90 tracking-widest border-gray-400'>VIEW ALL</button>
        </div>
<div className='flex justify-center gap-7 my-10 flex-wrap'>
<StylishShirt
imageSrc='/Images/New-1.png'
alt='shirt-1'
/>
<StylishShirt
imageSrc='/Images/New-2.png'
alt='shirt-1'
/>
<StylishShirt
imageSrc='/Images/New-3.png'
alt='shirt-1'
/>
<StylishShirt
imageSrc='/Images/New-4.png'
alt='shirt-1'
/>
</div>
    </div>
  )
}

export default NewSection