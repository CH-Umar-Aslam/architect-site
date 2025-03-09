import ProcessTimeline from '@/pages/About/ProcessTimeline'
import ServicesSection from '@/pages/Home/WhatWeDo'
import ServicesHighlight from '@/pages/services/ConstructionConsulting'
import ServicesHeader from '@/pages/services/ServicesHeader'
import React from 'react'

const Services = () => {
  return (
    <div>
      <ServicesHeader/>
      <ServicesSection/>
      <ServicesHighlight/>
      <ProcessTimeline/>
    </div>
  )
}

export default Services