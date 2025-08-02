import React from 'react'

export default function AboutInstructures() {
  return (
    <div className="bg-bannerImg bg-repeat bg-cover bg-center flex items-center justify-center">
      <div className="bg-blackOverlay flex h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 items-end w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white mb-8 sm:mb-12 md:mb-16 lg:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 md:gap-8 py-4"> 
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono leading-tight">
            Are you ready to start <br className="hidden sm:block"/> your journey?
          </h1>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full md:w-auto">
            <button className="border-2 border-white rounded font-mono px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 text-sm sm:text-base md:text-lg lg:text-xl hover:bg-white hover:text-black transition-colors duration-300">
              Browse Courses
            </button>
            <button className="rounded font-mono px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 text-sm sm:text-base md:text-lg lg:text-xl bg-yellow-500 text-black hover:bg-yellow-600 transition-colors duration-300">
              Become An Instructor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}