import AboutHeader from '@/pages/About/AboutHeader'
import AboutTestimonial from '@/pages/About/AboutTestimonial'
import Stats from '@/pages/About/Stats'
import FAQSection from '@/pages/Home/Faqs'
import WhatWeDo from '@/pages/Home/WhatWeDo'
import React from 'react'


const About = () => {
  return (
    <div>
      <AboutHeader/> 
      <WhatWeDo/>
      <AboutTestimonial/>
      <Stats/>
      <FAQSection/>
    </div>
  )
}

export default About