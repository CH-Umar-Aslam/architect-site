import ProcessTimeline from '@/pages/About/ProcessTimeline'
import ServicesSection from '@/pages/Home/WhatWeDo'
import ConstructionConsulting from '@/pages/Services/ConstructionConsulting'
import ServicesHeader from '@/pages/Services/ServicesHeader'
import React from 'react'

const Services = () => {
  return (
    <div>
      <ServicesHeader/>
      <ServicesSection/>
      <ProcessTimeline/>
      <ConstructionConsulting/>
    </div>
  )
}

export default Services