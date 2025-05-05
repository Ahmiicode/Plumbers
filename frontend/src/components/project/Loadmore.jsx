import React from 'react'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'

// ... image imports remain the same ...

const projects = [
  { 
    img: project1,
    title: "Modern Kitchen Renovation",
    description: "Complete plumbing overhaul for a contemporary kitchen upgrade ...",
    date: "March 2025",
    rating: 4.5
  },
  { 
    img: project2,
    title: "Residential Bathroom Upgrade",
    description: "Refurbished the bathroom plumbing system by replacing ...",
    date: "April 2025",
    rating: 4.8
  },
  { 
    img: project3,
    title: "Commercial Office Plumbing",
    description: "Installed a comprehensive plumbing system for a new office...",
    date: "May 2025",
    rating:  4.2
  },
  { 
    img: project4,
    title: "Emergency Leak Repair",
    description: "Responded to a 24/7 emergency service call to repair ...",
    date: "June 2025",
    rating: 4.6
  },
  { 
    img: project5,
    title: "Industrial Pipe Replacement",
    description: "Executed a full-scale replacement of outdated pipes ...",
    date: "July 2025",
    rating: 4.9
  },
  { 
    img: project6,
    title: "Complex Water Heater Installation",
    description: "Utilized advanced camera inspections to detect issues...",
    date: "August 2025",
    rating: 4.7
  },
]

const Loadmore = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-xl">
              <img 
                src={project.img} 
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center">
                  <span className="font-bold text-center text-sm">Explore It</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className='text-[#0056A6]'>{project.date}</span>
                <div className="flex items-center gap-1">
                  <span className='text-[#4A4A4A]'>Rating  {project.rating}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(Math.floor(project.rating))].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <h1 className="text-xl font-semibold text-[#4A4A4A]">
                {project.title}
              </h1>
              <p className="text-[#AAAAAA]">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center mt-22 gap-4 '>
                 <span className='w-40 md:w-80 border-t-2 border-gray-300' />
                 <h1 className=' text-sm md:text-sm p-2 text-[#AAAAAA] whitespace-nowrap font-medium '>
                 LOAD MORE
                 </h1>
                 <span className='w-40 md:w-80 border-t-2 border-gray-300' />
               </div>
    </div>
  )
}

export default Loadmore