import demoVideo from './video/video.mp4';

export default function OnlineCourses() {
  return (
    <div className='w-full h-96 flex justify-around '>
      <div className='w-[600px] rounded h-full bg-boxbanner bg-cover bg-center flex items-center justify-center'>
        <div className='bg-whiteOverlay flex h-full items-end w-full'>
          <div className='container mb-40 text-black ml-10 mt-28'>
              <h1>Quick access to the <br/> popular courses</h1>
              <button className='bg-yellow-500 w-36 h-10 rounded font-bold mt-6'>View Courses</button>
           </div>
        </div>
      </div>
      <div className='w-[600px] rounded h-full flex bg-[#F8EFBA] items-center justify-between'>
        <div className='w-1/3 h-1/3 flex flex-col justify-between items-center'>
        <h1 className='font-bold text-xl'>Develop Your <br/>Skill Online!</h1>
        <button className='p-4 w-40 h-12 bg-black text-white rounded flex justify-center items-center'>Apply Now</button>
        </div>
        <div className='w-1/2 h-1/2 mr-10 '>
              <video width="600" controls className='w-full h-full object-cover rounded'>
        <source src={demoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
    </div>
  )
}
