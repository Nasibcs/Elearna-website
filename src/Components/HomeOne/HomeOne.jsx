import homeone from "./image/homeoneImage.webp";
import { MdOutlineMessage } from "react-icons/md";

export default function HomeOne() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-[#243631] text-white px-6 md:px-12 lg:px-20 py-10 gap-10">

      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-28">
        <img
          src={homeone}
          alt="Online Learning"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
        />

        {/* Achievements Box */}
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 lg:left-auto lg:top-[400px] lg:right-32 bg-white text-black w-52 h-20 rounded flex shadow-lg">
          <div className="w-16 flex items-center justify-center">
            <MdOutlineMessage className="text-black text-5xl" />
          </div>
          <div className="flex flex-col w-full p-2">
            <h1 className="text-2xl font-bold">125+</h1>
            <p className="text-sm">Achievement awards</p>
          </div>
        </div>

        {/* Students Info Box */}
        <div className="absolute bottom-[-140px] lg:bottom-auto lg:top-[200px] lg:left-[-80px] bg-green-950 text-white p-6 rounded-2xl w-fit mx-auto text-center shadow-lg">
          <p className="text-gray-400 font-semibold text-sm">Trusted By</p>
          <h2 className="text-sm font-bold mt-1">15000+ enrolled students</h2>

          <div className="flex justify-center -space-x-4 mt-2">
            {[1, 2, 3, 4].map((id) => (
              <img
                key={id}
                className="w-10 h-10 rounded-full border-2 border-white"
                src={`https://randomuser.me/api/portraits/${id % 2 ? 'women' : 'men'}/${id}.jpg`}
                alt={`User ${id}`}
              />
            ))}
          </div>

          <div className="flex justify-center items-center mt-4 space-x-1 text-yellow-400 text-lg">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="text-white ml-2 text-base font-semibold">4.94</span>
            <span className="text-gray-400 text-sm">(625)</span>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-[45%] text-center lg:text-left space-y-6 mt-40 lg:mt-56">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          More than <span className="text-yellow-500">25000+</span> education courses online
        </h1>

        <p className="text-sm md:text-base text-gray-300 max-w-lg mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin 
          mauris tincidunt commodo ornare.
        </p>

        <button className="mt-4 border-2 border-white text-white font-semibold px-6 py-3 rounded shadow-md transition duration-300 hover:bg-white hover:text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}
