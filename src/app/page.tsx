import React from 'react'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import ThirdSection from './components/ThirdSection'
import NewArrival from './components/NewArrival'

function page() {
  return (
    <div>
      <section className='md:mx-28'>
        <HeroSection/>
        <Categories />
        <ThirdSection />
        <NewArrival />
      </section>
    </div>
  )
}

export default page