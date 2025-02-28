import Image from 'next/image';
import React from 'react';
import AnimatedCard from './AnimatedCard';
import GlowingButton from './GlowingButton';
import Link from 'next/link';

const ThirdSection = () => {
  return (
    <div className='my-12 flex justify-center gap-4 items-center relative'>
      <div className='relative'>
        <Link href={"/Shop"}>
 <AnimatedCard width='540px' height='320px' >
  <div className='relative w-[520px] h-[330px]'>
    <Image 
      className='shadow-lg rounded-md'
      src={'/Images/banner-1.png'}
      alt='1st'
      fill 
      style={{ objectFit: 'cover' }} 
    />
  </div>
  {/* Button Positioned inside the Image */}
  <div className='absolute left-[18.6rem] top-[11.3rem]'>
    <GlowingButton
      textSize="text-[13px]" 
      width='91px'
      height='28px'
    />
  </div>
</AnimatedCard>
</Link>

      </div>

<div className='relative'>
        <Link href={"/Shop"}>
      <AnimatedCard width='540px' height='320px'>
        <div className='relative w-[520px] h-[330px]'>
          <Image 
            className='shadow-lg rounded-md'
            src={'/Images/banner-2.png'}
            alt='2nd'
            fill 
            style={{ objectFit: 'cover' }} 
            />
        </div>
        <div className='absolute left-[15.2rem] top-[10.5rem]'>
    <GlowingButton
      shadow="0px 0px 20px rgba(0, 255, 0, 0.6"
    text='Explore Our'
    textColor='text-white'
    color='bg-green-500'
      textSize="text-[16px]" 
      width='120px'
      height='42px'
      />
  </div>
      </AnimatedCard>
      </Link>
            </div>
    </div>
  );
};

export default ThirdSection;
