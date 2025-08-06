import React from 'react'
import study1 from "./images/study1.jpg";
import study2 from "./images/study2.jpg";

export default function Offering() {
  return (
    <div className='w-full flex flex-col lg:flex-row mt-10 px-4 md:px-8 lg:px-16'>

      {/* Left Image Section */}
      <div className='w-full lg:w-1/2 flex flex-col sm:flex-row gap-6 relative mb-10 lg:mb-0'>
        
        <div className='w-full sm:w-1/2 h-80 sm:h-96 relative rounded-lg shadow-2xl mt-10'>
          <img src={study1} alt="study" className='w-full h-full object-cover rounded-lg' />
        </div>

        <div className='w-full sm:w-1/2 h-80 relative rounded-lg shadow-2xl'>
          <img src={study2} alt="study" className='w-full h-full object-cover rounded-lg' />
        </div>

        {/* Floating Badge */}
        <div className='absolute bottom-[-20px] left-6 sm:left-20 bg-[#0a1a26] text-white p-4 rounded shadow-lg flex gap-4 items-center w-[280px]'>
          <div className='text-yellow-500 text-4xl font-bold'>50+</div>
          <div className='text-sm'>
            <h1 className='font-semibold'>free courses</h1>
            <p className='text-xs'>listed online ✨</p>
          </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div className='w-full lg:w-1/2 flex flex-col justify-between gap-6'>
        <div>
          <h1 className='text-xl font-semibold'>What we offer</h1>
          <h2 className='text-3xl sm:text-4xl font-bold mt-4'>
            Personalized learning <br /> for your ambitions
          </h2>
          <p className='text-gray-600 mt-4'>
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm font-medium'>
          <ul className='list-disc list-inside'>
            <li>Skill-based instruction</li>
            <li>Global certification</li>
          </ul>
          <ul className='list-disc list-inside'>
            <li>Analytics and insights</li>
            <li>Customizable courses</li>
          </ul>
        </div>

        {/* Bottom Box */}
        <div className='bg-[#d6e7f0] rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div>
            <h1 className='font-bold text-lg'>Still have questions?</h1>
            <p className='text-gray-700 text-sm mt-1'>
              Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
            </p>
          </div>
          <button className='bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
