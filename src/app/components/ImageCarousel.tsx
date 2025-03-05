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
    '/Images/arrival-banner.png',
    '/Images/Main (2).png',
    '/Images/Main 3.png',
  ];

  return (
    <div className='relative w-full  '>
      <div className='overflow-hidden rounded-lg shadow-xl'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className='relative h-[250px] md:h-[400px]'>
              <Image
                quality={100}
                src={image}
                alt={`Slide ${index}`}
                width={1920} // Ensure explicit width
                height={1080} // Ensure explicit height
                className='rounded-md'
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
