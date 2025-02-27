import Image from 'next/image'
import React from 'react'
import AnimatedCard from './AnimatedCard'

const ThirdSection = () => {
  return (
    <div className='my-12 flex justify-center gap-4 items-center'>
<Image 
className='shadow-lg rounded-md'
src={'/Images/banner-1.png'}
width={590}
height={390}
alt='1st'
/>
<AnimatedCard width='540px' height='320px'>
  <div className='flex justify-center items-center object-contain w-[460px] h-[200px]'>
<Image 
className='shadow-lg rounded-md'
src={'/Images/kk.png'}
width={470}
height={220}
alt='2nd'
/>
</div>
</AnimatedCard>

    </div>
  )
}

export default ThirdSection