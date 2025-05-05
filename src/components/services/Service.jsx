import React from 'react'
import ser1 from '../../assets/ser1.png'
import ser2 from '../../assets/ser2.png'
import ser3 from '../../assets/ser3.png'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaTools, FaShower, FaFirstAid, FaToilet, FaTint, FaHardHat, FaSearch, FaLeaf, FaBuilding, FaScrewdriver, FaTemperatureHigh, FaBusinessTime, FaWrench, FaTrash, FaHandHolding, FaGasPump } from 'react-icons/fa';

const Service = () => {
  const services = [
    { icon: <FaScrewdriver />, title: 'Leak Detection & Repair' },
    { icon: <FaTemperatureHigh/>, title: 'Water Heater Installation' },
    { icon: <FaShower />, title: 'Drain Cleaning & Unclogging' },
    { icon: <FaBusinessTime />, title: 'Emergency Plumbing' },
    { icon: <FaWrench />, title: 'Pipe replacement' },
    { icon: < FaTrash/>, title: 'Garbage Disposal Repair' },
    { icon: <FaHandHolding />, title: 'Water Filtration System' },
    { icon: <FaSearch />, title: 'Sewer Line Inspection' },
    { icon: <FaGasPump />, title: 'Gas Line Installation' },
  ];
  return (
    <div className="w-full max-w-[1440px] mx-auto py-20 px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Column - Images */}
        <div className="lg:w-1/2 space-y-4">
          <div className="relative">
            <img src={ser1} alt="Plumbing service" className="w-full rounded-lg" />
          </div>
          
          <div className="flex gap-4">
            <div className="w-1/2">
              <img src={ser2} alt="Tools" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-1/2 relative">
              <img src={ser3} alt="Team" className="w-full  object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 pb-8 right-0 mb-7 bg-blue-900 text-white p-6 rounded-b-lg h-40 md:h-48 lg:h-56">
  <div className=" ">
    <div className='mx-4  text-center'>
      <p className="text-xl lg:text-4xl font-bold">500+</p>
      <p className="text-[9px] lg:text-sm">Skilled Plumbers in Our Network</p>
    </div>
    <div className='mx-4 text-center'>
      <p className="text-xl lg:text-4xl font-bold">10K+</p>
      <p className="text-[9px] lg:text-sm">Emergency Repairs Handled</p>
    </div>
    <div className='mx-4 text-center'>
      <p className="text-xl lg:text-4xl font-bold ">50K+</p>
      <p className="text-[9px] lg:text-sm">Satisfied Customers</p>
    </div>
  </div>


              </div>
            </div>
          </div>
         
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 ">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-gray-300" />
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                SERVICES
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-[#4A4A4A] mb-6">
              Comprehensive Plumbing Services for Your Home & Business
            </h1>
            <p className="text-gray-500 text-lg">
              We offer complete plumbing solutions tailored to your residential or commercial needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl transition-all duration-300 hover:bg-blue-900 hover:text-white cursor-pointer group"
              >
                <span className="text-3xl p-2 m-7 bg-gray-200 text-[#0056A6] mb-4 inline-block ">
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold m-3 mb-2">{service.title}</h3>
                <p className="text-sm opacity-75 group-hover:opacity-100">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-6">
            <button className="text-gray-400 hover:text-blue-900 transition">
              <FiArrowLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {[1, 2, 3].map((dot) => (
                <button 
                  key={dot}
                  className={`w-3 h-3 rounded-full ${dot === 1 ? 'bg-blue-900' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <button className="text-gray-400 hover:text-blue-900 transition">
              <FiArrowRight size={24} />
            </button>
          </div>
          <div className='justify-center flex mt-14'>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
              {/* Hotline Box */}
              <div className="w-full lg:w-[340px]  bg-white h-12 lg:h-[50px] rounded flex items-center p-1">
                <div className="bg h-full flex items-center px-4 lg:px-5 rounded-sm">
                  <span className="text-sm lg:text-base">Emergency Hotline</span>
                </div>
                <span className="text-xl text lg:text-[22px] font-semibold ml-14 lg:ml-12">784392</span>
              </div>

              {/* Call Now Button */}
              <button className="w-full lg:w-[144px] h-12 lg:h-[48px] bg-[#FFC107] rounded-sm text-black font-bold ">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service