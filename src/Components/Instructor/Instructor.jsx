export default function Instructor() {
  return (
    <div className="bg-bannerImg bg-repeat bg-cover bg-center min-h-[300px] flex items-center justify-center">
      <div className="bg-black bg-opacity-60 w-full flex items-center min-h-[300px]">
        <div className="container mx-auto text-white px-4 py-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl font-mono text-center md:text-left leading-snug">
            Are you ready to start <br className="hidden sm:block" /> your journey?
          </h1>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="border-2 rounded font-mono px-4 py-2 text-base sm:text-lg">
              Browse Courses
            </button>
            <button className="px-4 py-2 rounded font-mono text-base sm:text-lg bg-yellow-500 text-black">
              Become An Instructor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
