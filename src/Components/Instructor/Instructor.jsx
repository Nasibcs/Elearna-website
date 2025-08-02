
export default function Instructor() {
  return (
    <div className="bg-bannerImg bg-repeat bg-cover bg-center flex items-center justify-center">

        <div className="bg-blackOverlay flex h-72 items-end w-full">
            <div className="container  text-white ml-10 mb-20 flex justify-between p-5"> 

           <h1 className="font-bold text-4xl font-mono">Are you ready to start <br/> your journey?</h1>

           <div>
            <button className="border-2 rounded font-mono p-2 mr-2 text-xl">Browse Courses</button>
            <button className="p-3 rounded mr-2 font-mono text-xl bg-yellow-500 text-black">Become An Instructor</button>
           </div>
            </div>

        </div>
      
    </div>
  )
}
