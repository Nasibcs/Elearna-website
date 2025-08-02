import React from 'react'
import study1 from "./images/study1.jpg";
import study2 from "./images/study2.jpg";
export default function Offering() {
  return (
    <div className='w-full h-screen flex mt-5 '>
      <div className='w-1/2 h-full flex gap-4'>
         <div className='w-1/2 h-96 relative  rounded top-32 left-16 z-10 shadow-2xl shadow-gray-600 '>
                <img src={study1} alt="study" className='w-full h-full rounded' />
         </div>
         <div className=' flex rounded p-4 w-56 h-24 bg-[#0a1a26] absolute top-[185rem] left-40 z-20'>
                <div className='flex justify-center items-center w-1/2 h-full'>
                    <h1 className='text-5xl text-yellow-500'>50+</h1>
                    <h2 className='relative bottom-5 right-3'>✨</h2>
                </div>
                <div className='w-1/2 h-full'>  
                    <h1 className='text-white font-serif mt-4'>free courses listed online</h1>
                </div>
         </div>
         <div className='w-1/2 h-[400px] relative shadow-2xl shadow-gray-600'>
                <img src={study2} alt="" className='w-full rounded' />
         </div>
      </div>

      <div className='w-[600px] h-full flex flex-col p-5'>
      <h1 className='font-semibold text-2xl'>what we Offer
</h1> 
<h2 className='mt-7 ml-8 text-4xl text-bold'>Personalized learning for<br/> your ambitions</h2>
<p className='text-sm text-gray-500 mt-4 w-[500px] ml-8'>Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.</p>
<div className=' flex w-full h-36 justify-between items-center p-8'>
    <ul className='text-bold'>
        <li>. Skill-based instruction</li>
        <li>. Global certification</li>
    </ul>
      <ul  className='text-bold'>
        <li>. Analytics and insights</li>
        <li>. Customizable courses</li>
    </ul>
</div>
<div className='bg-[#d6e7f0] w-full h-40 rounded flex p-5'>
    <div className='flex flex-col p-5'>
        <h1 className='font-bold'>Still have questions?</h1>
        <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
    </div>
    <div className='flex justify-center items-center'>
        <button className='bg-black w-40 h-14 rounded text-white flex justify-center items-center p-4'>Get Started</button>
    </div>
</div>
      </div>
    </div>
  )
}
