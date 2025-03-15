import BlogSection from "@/pages/Home/Blogs";
import ContactSection from "@/pages/Contact/ContactSection";
import FAQSection from "@/pages/Faqs/Faqs";
import HeroSection from "@/pages/Home/HeroSection";
import ProjectsSection from "@/pages/Home/Projects";
import TestimonialSlider from "@/pages/Home/Testimonials";
import ServicesSection from "@/pages/Home/WhatWeDo";
import WhyChooseUs from "@/pages/Home/WhyChooseUs";


export default function Home() {
  return (
<div>

<HeroSection/>
<ServicesSection/>
<ProjectsSection/>
<TestimonialSlider/>
<WhyChooseUs/>
<FAQSection/>
<BlogSection/>
<ContactSection/>

</div>
  );
}
