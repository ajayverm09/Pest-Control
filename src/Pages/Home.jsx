import React from 'react'
import HeroSlider from '../Components/HeroSlider'
import ServicesSection from '../Components/HomeService'
import HeroSection from '../Components/HomeAbout'
import ServiceSlider from '../Components/ServiceSlider'
import WhyChooseUs from '../Components/HomeChoose'
import TestimonialSlider from '../Components/HomeTestimonial'
import ContactUs from '../Components/HomeContact'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSlider/>
      <ServicesSection/>
      <HeroSection/>
      <WhyChooseUs/>
      <TestimonialSlider/>
      <ServiceSlider/>
      <ContactUs/>
    </div>
  )
}

export default Home
