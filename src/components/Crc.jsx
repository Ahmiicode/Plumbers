import React from 'react';
import '../index.scss';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Crc = () => {
  return (
    <div className='w-full min-h-screen pt-20 lg:pt-32 bg-gray-100'>
      {/* MAP Section */}
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='w-full h-[200px] md:h-[270px] rounded-2xl overflow-hidden shadow-xl'>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.778471986262!2d-89.6532436846166!3d39.78172127944447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887525be2c2c07fb%3A0x41800b1839d1a8f2!2sSpringfield%2C%20IL%2C%20USA!5e0!3m2!1sen!2s!4v1685638725015!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className='w-full bg mt-8 lg:mt-10 p-8 lg:p-12 shadow-xl'>
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24'>
          {/* LEFT SIDE */}
          <div className='lg:w-1/2 space-y-4 lg:space-y-6'>
            <h1 className='text-white text-2xl md:text-3xl font-medium border-b-2 pb-2 w-fit'>
              Contact
            </h1>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
              Get In Touch
            </h2>
            <p className='text-white text-lg md:text-xl'>
              We’re here to assist you with all your plumbing needs. Reach out today!
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className='lg:w-1/2 space-y-6 lg:space-y-8'>
            <div className='flex items-start gap-4'>
              <FaEnvelope className='text-white text-2xl lg:text-3xl mt-1' />
              <div>
                <h3 className='text-white font-semibold text-lg lg:text-xl'>Email</h3>
                <p className='text-white text-base lg:text-lg'>
                  info@plumbingservices.com
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <FaPhoneAlt className='text-white text-2xl lg:text-3xl mt-1' />
              <div>
                <h3 className='text-white font-semibold text-lg lg:text-xl'>Phone</h3>
                <p className='text-white text-base lg:text-lg'>
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <FaMapMarkerAlt className='text-white text-2xl lg:text-3xl mt-1' />
              <div>
                <h3 className='text-white font-semibold text-lg lg:text-xl'>Office</h3>
                <p className='text-white text-base lg:text-lg'>
                  456 Plumbing Ave, Springfield, IL 62701, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crc;
