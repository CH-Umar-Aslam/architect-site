'use client'
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'dlm9bcm721s2',
  environment: 'master',
  accessToken: 'DlKSki57ShqmqPwAV1n7Uh6Bz8yn3xwuU89rN5DLgME'
});

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const fallbackPosts = [
    {
      id: 1,
      title: 'Impact of Technology on Construction Finance',
      excerpt: 'Porttitor rhoncus dolor purus non enim praesent elementum facilisis. A diam sollicitudin tempor id eu nisl nunc fames.',
      category: 'MATERIALS',
      date: 'AUGUST 30, 2021',
      image: '/assets/project3.svg',
    },
    {
      id: 2,
      title: 'Composite Materials – Applications for the Future',
      excerpt: 'Vel facilisis volutpat est velit egestas. Ut placerat orci nulla pellentesque dignissim enim sit amet. Ornare lectus sit amet est placerat.',
      category: 'MATERIALS',
      date: 'AUGUST 28, 2021',
      image: '/assets/project2.svg',
    },
    {
      id: 3,
      title: 'Possibly Perfect Way to Build Bridges',
      excerpt: 'Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum',
      category: 'MATERIALS',
      date: 'AUGUST 26, 2021',
      image: '/assets/project1.svg',
    },
  ];

  useEffect(() => {
    client.getEntries()
      .then((response) => {
        console.log('response from content full',response.items);
        
        const mappedPosts = response.items.map((item) => ({
          id: item.sys.id,
          title: item.fields.title,
          excerpt: item.fields.summary,
          category: item.fields.category || 'GENERAL',
          date: item.fields.createdAt.split('T')[0],
          image: item.fields.thumbnail?.fields.file.url || '/assets/default.svg',
        }));
        setBlogPosts(mappedPosts);
      })
      .catch(() => setBlogPosts(fallbackPosts));
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-gradColLeft to-gradColRight py-16 px-6">
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-px w-8 bg-secondary mr-3"></div>
              <span className="text-gray-300 uppercase text-sm tracking-wider font-medium">BUILDING THE FUTURE</span>
            </div>
            <h2 className="text-3xl font-bold text-white">
              Latest From the <span className="text-primary">Blog</span>
            </h2>
          </div>
          <button className="mt-4 sm:mt-0 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 transition-colors">
            OUR BLOG
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col h-full">
              <div className="h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex items-center mb-2">
                  <span className="text-primary text-xs font-medium">{post.category}</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-white text-xl font-medium mb-3">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                <a href="#" className="flex items-center text-primary text-sm font-medium">
                  READ MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <div className="mt-4 border-t border-gray-700 pt-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

