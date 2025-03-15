import BlogHeader from '@/pages/Blog/BlogHeader'
import ConstructionBlog from '@/pages/Blog/ConstructionBlog'
import BlogSection from '@/pages/Blog/ContenfullBlogs'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <BlogSection/> */}
      <BlogHeader/>
    <ConstructionBlog/>
    </div>
  )
}

export default page