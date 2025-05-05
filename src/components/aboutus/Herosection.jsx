import React from 'react'
import heroImage from '../../assets/aboutus.png';
import { Link } from 'react-router-dom';

const Herosection = () => {
  return (
    <div className=' min-h-[400px] lg:min-h-[622px]  relative overflow-hidden'>
         {/* Hero Background Image */}
         <div className="w-full h-[400px] md:h-[600px] relative bg-top bg-cover " 
           style={{ backgroundImage: `url(${heroImage})` }}>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/20 to-blue-900" />
        
        {/* Content Container */}
        <div className="absolute top-1/2 -translate-y-1/2 container mx-auto ml-0 lg:ml-16 px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-2xl xl:max-w-3xl">
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-22 h-[2px] bg-white' /> {/* Changed line color */}
            <h2 className='text-2xl font-medium text-white [&]'>ABOUT US</h2> {/* h2 color */}
          </div>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
            Your Trusted Partner in <br/> Plumbing Solutions
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-[600px]">
            Decades of expertise, a commitment to quality, and reliable service—ensuring your home & business plumbing runs smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to='/booknow' >
              <button className="button-yellow px-8 py-3 text-lg w-full sm:w-auto">
                Book Now
              </button>
              </Link>
              <Link to='/contactus'>
              <button className="bg-white text font-semibold px-8 py-3 rounded-lg w-full sm:w-auto">
                Contact us
              </button>
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
