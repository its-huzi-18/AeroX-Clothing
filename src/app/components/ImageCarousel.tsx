"use client"; // Ensure this is a client component
import Image from 'next/image';
import dynamic from 'next/dynamic';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dynamically import react-slick to disable SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hides navigation arrows for a cleaner look
  };

  const images = [
    '/Images/Arrival-banner-1.png',
    '/Images/Arrival-banner-2.png',
    '/Images/Arrival-banner-3.png',
    '/Images/Arrival-banner-4.png',
  ];

  return (
    <div className='relative w-full'>
      {/* Preload the first image */}
      <link rel="preload" href={images[0]} as="image" />

      <div className='overflow-hidden rounded-lg shadow-xl'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className='relative px-4 md:px-0 h-[210px] w-full md:h-[400px]'>
              <Image
                quality={100}
                src={image}
                alt={`Slide ${index}`}
                width={1920} // Ensure explicit width
                height={1080} // Ensure explicit height
                className='rounded-md h-[210px] md:h-auto'
                priority={index === 0} // Prioritize the first image
                loading={index === 0 ? 'eager' : 'lazy'} // Lazy load other images
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;