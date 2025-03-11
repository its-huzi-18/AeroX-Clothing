import Image from 'next/image';
import React from 'react';
import AnimatedCard from './AnimatedCard';
import GlowingButton from './GlowingButton';
import Link from 'next/link';

const ThirdSection = () => {
  return (
    <div className='my-12 flex-col md:flex-row flex justify-center gap-4 items-center relative'>
      <div className='relative'>
        <Link href={"/Shop"}>
 <AnimatedCard width="auto" height="auto">
  <div className='relative w-[320px] h-[250px] md:w-[520px] md:h-[291px]'>
    <Image 
      className='shadow-lg rounded-md md:object-cover'
      src={'/Images/banner-1.png'}
      alt='1st'
      fill 
    />
  </div>
  {/* Button Positioned inside the Image */}
  <div className='absolute md:left-[18.6rem] left-[50%] top-[9.8rem] md:top-[11.3rem]'>
    <GlowingButton
      textSize="text-[13px]" 
      width='w-[91px]'
      height='h-[28px]'
    />
  </div>
</AnimatedCard>
</Link>

      </div>

<div className='relative'>
        <Link href={"/Shop"}>
    <AnimatedCard width="auto" height="auto">
  <div className='relative w-[320px] h-[250px] md:w-[520px] md:h-[291px]'>
          <Image 
            className='shadow-lg rounded-md'
            src={'/Images/banner-2.png'}
            alt='2nd'
            fill 
            />
        </div>
        <div className='absolute left-[9.7rem] md:left-[15.2rem] top-[10.5rem]'>
    <GlowingButton
      shadow="0px 0px 20px rgba(0, 255, 0, 0.6)"
    text='Explore Our'
    textColor='text-white'
    color='bg-green-500'
      textSize="md:text-[16px] text-[12px]" 
      width='md:w-[120px] w-[82px]'
      height='md:h-[42px] h-[35px]'
      />
  </div>
      </AnimatedCard>
      </Link>
            </div>
    </div>
  );
};

export default ThirdSection;
