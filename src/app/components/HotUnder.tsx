import React from 'react'
import AnimatedButton from './AnimatedButton'
import StylishShirt from './ImagesStyle'

const HotUnder = () => {
  return (
  <div className='my-12'>
    <div className='flex justify-between mx-6'>
        <h2 className='font-medium text-3xl'>Hot Under <span className='text-blue-500'>999!</span></h2>
<AnimatedButton
text='View All'
/>
  </div>
<div className='flex justify-center gap-4 my-10 flex-wrap'>
<StylishShirt
imageSrc='/Images/logo.png'
alt='shirt-1'
/>
<StylishShirt
imageSrc='/Images/logo.png'
alt='shirt-1'
/>
<StylishShirt
imageSrc='/Images/logo.png'
alt='shirt-1'
/>
<StylishShirt
imageSrc='/Images/logo.png'
alt='shirt-1'
/>
</div>
    </div>
  )
}

export default HotUnder