import { Dribbble, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import React from 'react';

const OurTeam = () => {
  const team = [
    {
      id: 1,
      name: 'Abdul Rehman',
      role: 'Civil Engineer',
      image: '/assets/civil.jpg',
      description: 'Lorem ipsum dolor sit amet, et suscipit lacus laoreet non. Purus molestie ornare accumsan pharetra.',
      socialLinks: ['facebook', 'twitter', 'linkedin', 'instagram']
    },
    {
      id: 2,
      name: 'Muhammad Ali',
      role: 'Project Manager',
      image: '/assets/civil.jpg',
      description: 'Vivamus enim nunc, iaculis porttitor at convallis sit amet elit. Et molestie eleifend faucibus mauris. Donec congue nunc vitae.',
      socialLinks: ['facebook', 'twitter', 'linkedin']
    },
    {
      id: 3,
      name: 'Aleena Ahmed',
      role: 'Civil Engineer',
      image: '/assets/civil.jpg',
      description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque. Adipiscing elit duis tristique sollicitudin nibh sit.',
      socialLinks: ['facebook', 'twitter', 'linkedin', 'instagram']
    },
    {
      id: 4,
      name: 'Maryam Nadeem',
      role: 'Interior Designer',
      image: '/assets/civil.jpg',
      description: 'Nam elementum metus hendrerit viverra eleifend. Etiam sit amet nisi in orci finibus mattis. Etiam ac sapien nisi viverra in finibus nunc.',
      socialLinks: ['facebook', 'twitter', 'linkedin', 'instagram']
    },
    {
      id: 5,
      name: 'Sara Raza',
      role: 'Architect',
      image: '/assets/civil.jpg',
      description: 'Ut consectetur consequat consequat. Dolor ipsum. Nam phasellus felis vitae hendrerit. Phasellus turpis nec nibh. Nulla consequat consequat.',
      socialLinks: ['facebook', 'twitter', 'linkedin', 'dribbble']
    },
    {
      id: 6,
      name: 'Ali Murtaza',
      role: 'Interior Designer',
      image: '/assets/civil.jpg',
      description: 'Proin semper nisl ac tellus ut orci. Phasellus semper nisl ac tellus ut orci. Nunc consequat consequat mollis. Maurit faucet ultricies inci.',
      socialLinks: ['facebook', 'twitter', 'linkedin', 'instagram']
    }
  ];

  // Social media icon component
  const SocialIcon = ({ type }) => {
    return (
      <a 
        href="#" 
        className="p-2 rounded-full bg-darkGray flex items-center justify-center text-white  hover:bg-primary"
      >
        {type === 'facebook' && <Facebook className='w-[14px] h-[14px] '/>}
        {type === 'twitter' && <Twitter className='w-[14px] h-[14px] '/>}
        {type === 'linkedin' && <Linkedin className='w-[14px] h-[14px] '/>}
        {type === 'instagram' && <Instagram className='w-[14px] h-[14px] '/>}
     
        {type === 'dribbble' && <Dribbble className='w-[14px] h-[14px] '/>}
      </a>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map(member => (
          <div key={member.id} className="flex shadow-lg border-b flex-col ">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full   h-64 object-cover object-center"
            />
            <div className="p-4 pb-6">
              <h3 className="font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-teal-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4 h-[80px] border-b ">{member.description}</p>
              <div className="flex space-x-2">
                {member.socialLinks.map((social, index) => (
                  <SocialIcon key={index} type={social} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;