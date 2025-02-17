import React from 'react'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'

function page() {
  return (
    <div>
      <section className='md:mx-28'>
        <HeroSection/>
        <Categories />
      </section>
    </div>
  )
}

export default page