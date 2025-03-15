import ProcessTimeline from '@/pages/About/ProcessTimeline'
import ServicesSection from '@/pages/Home/WhatWeDo'
import Construction from '@/pages/Services/Construction'
import ServicesHeader from '@/pages/Services/ServicesHeader'



const ServicesPage = () => {
  return (
    <div>
      <ServicesHeader/>
      <ServicesSection/>
      <ProcessTimeline/>
      <Construction/>
    </div>
  )
}

export default ServicesPage