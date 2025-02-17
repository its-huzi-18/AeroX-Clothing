import ImageCarousel from "./ImageCarousel";

interface LayoutSectionProps {
  onCategoryClick: (category: string) => void;
}

const HeroSection  = () =>{


  return (
    <div className='w-full  flex justify-center items-center my-2'>
    <div className='w-full relative'>
      <ImageCarousel />
    </div>

    </div>
  )
}

export default HeroSection