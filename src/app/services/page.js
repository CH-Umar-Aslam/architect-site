import ProcessTimeline from '@/pages/About/ProcessTimeline'
import ServicesSection from '@/pages/Home/WhatWeDo'
import ServicesHighlight from '@/pages/Services/ConstructionConsulting'
import ServicesHeader from '@/pages/Services/ServicesHeader'
import React from 'react'

const Services = () => {
  return (
    <div>
      <ServicesHeader/>
      <ServicesSection/>
      <ProcessTimeline/>
      <ServicesHighlight/>
    </div>
  )
}

export default Services