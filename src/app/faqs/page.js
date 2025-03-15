import ContactSection from '@/pages/Contact/ContactSection'
import FAQSection from '@/pages/Faqs/Faqs'
import FaqsHeader from '@/pages/Faqs/FaqsHeader'
import React from 'react'

const FAQs = () => {
  return (
    <div>
      <FaqsHeader/>
      <FAQSection/>
    <ContactSection/>
    </div>
  )
}

export default FAQs