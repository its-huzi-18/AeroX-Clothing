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
<Image 
className='shadow-lg rounded-md'
src={'/Images/Banner-22.jpg'}
width={590}
height={340}
alt='2nd'
/>
</AnimatedCard>

    </div>
  )
}

export default ThirdSection