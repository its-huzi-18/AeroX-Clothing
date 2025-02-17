import Image from 'next/image'
import React from 'react'

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
<Image 
className='shadow-lg rounded-md'
src={'/Images/banner-2.png'}
width={590}
height={390}
alt='2nd'
/>

    </div>
  )
}

export default ThirdSection