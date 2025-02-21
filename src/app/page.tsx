import React from 'react'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import ThirdSection from './components/ThirdSection'
import NewArrival from './components/NewArrival'
import NewSection from './components/NewSection'
import SignUpSave from './components/SignUpSAVE'

function page() {
  return (
    <div>
      <section className='md:mx-28'>
        <HeroSection/>
        <Categories />
        <ThirdSection />
        <NewArrival />
        <NewSection />
        <SignUpSave />
      </section>
    </div>
  )
}

export default page