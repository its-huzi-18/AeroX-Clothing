import React from 'react'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import ThirdSection from './components/ThirdSection'
import NewArrival from './components/NewArrival'
import NewSection from './components/NewSection'
import SignUpSAVE from './components/Email'

function Page() { // ✅ Define types
  return (
    <div>
        <section className='md:mx-28'>
          <HeroSection/>
          <Categories />
          <ThirdSection />
          <NewArrival />
          <NewSection />
          <SignUpSAVE />
        </section>
    </div>
  );
}

export default Page;
