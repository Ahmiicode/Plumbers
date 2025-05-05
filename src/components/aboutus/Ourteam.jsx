import React from 'react';
import { FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import '../../index.scss';

const OurTeam = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 border-t-2 border-gray-300" />
            <h2 className="font-bold text-lg uppercase tracking-widest text-gray-300">
              Our Team
            </h2>
            <div className="w-12 border-t-2 border-gray-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#4A4A4A] mb-4">
            Trusted Experts, Reliable Service
          </h1>
          <p className="text-gray-400 md:text-lg max-w-xl mx-auto">
            Our team of licensed professionals delivers top-quality plumbing solutions with efficiency and care.
          </p>
        </div>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* Card 1 */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square">
          <img 
            src={team1} 
            alt="Team Member" 
            className="w-full h-full object-cover  transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0  p-6 bg-gradient-to-t from-[#005FB8] to-[#0056A6]">
            <div className=" justify-between items-end">
              <div>
                <h3 className="text-xl font-bold text-white">Michael Carter</h3>
                <p className="text-gray-200">Master Plumber</p>
                <p className='text-gray-300'>With 15+ years of experience, Michael specializes in complex plumbing repairs and installations.</p>
              </div>
              <div className='flex justify-between mt-3'>
              <div className="flex gap-2">
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaLinkedin className="w-5 h-5 text-blue-800 " />
                </a>
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaInstagram className="w-5 h-5 text-blue-800 " />
                </a>
              </div>
              <div className='flex '>
                <h1 className='text-gray-200 mt-2'>Explore </h1>
                <FaArrowRight className='text-gray-200 mt-3 ml-2 text-sm'/>
              </div>
              </div>
             
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square">
          <img 
            src={team2} 
            alt="Team Member" 
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#005FB8] to-[#0056A6]">
          <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold text-white">Michael Carter</h3>
                <p className="text-gray-200">Master Plumber</p>
              </div>
              <div className="flex gap-2">
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaLinkedin className="w-5 h-5 text-blue-800 " />
                </a>
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaInstagram className="w-5 h-5 text-blue-800 " />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square">
          <img 
            src={team2} 
            alt="Team Member" 
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#005FB8] to-[#0056A6]">
          <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold text-white">Michael Carter</h3>
                <p className="text-gray-200">Master Plumber</p>
              </div>
              <div className="flex gap-2">
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaLinkedin className="w-5 h-5 text-blue-800 " />
                </a>
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaInstagram className="w-5 h-5 text-blue-800 " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 4 */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square">
          <img 
            src={team2} 
            alt="Team Member" 
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#005FB8] to-[#0056A6]">
          <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold text-white">Michael Carter</h3>
                <p className="text-gray-200">Master Plumber</p>
              </div>
              <div className="flex gap-2">
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaLinkedin className="w-5 h-5 text-blue-800 " />
                </a>
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaInstagram className="w-5 h-5 text-blue-800 " />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square">
          <img 
            src={team2} 
            alt="Team Member" 
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#005FB8] to-[#0056A6]">
          <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold text-white">Michael Carter</h3>
                <p className="text-gray-200">Master Plumber</p>
              </div>
              <div className="flex gap-2">
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaLinkedin className="w-5 h-5 text-blue-800 " />
                </a>
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaInstagram className="w-5 h-5 text-blue-800 " />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-square">
          <img 
            src={team2} 
            alt="Team Member" 
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#005FB8] to-[#0056A6]">
          <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold text-white">Michael Carter</h3>
                <p className="text-gray-200">Master Plumber</p>
              </div>
              <div className="flex gap-2">
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaLinkedin className="w-5 h-5 text-blue-800 " />
                </a>
                <a href="#" className="p-2 bg-white rounded-full ">
                  <FaInstagram className="w-5 h-5 text-blue-800 " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;