import "../../LogosScroll.css"; // Ensure animation is smooth and infinite
import learn from "./image/learn.svg";
import learn2 from "./image/learn2.svg";
import learn3 from "./image/learn3.svg";
import learn4 from "./image/learn4.svg";
import learn5 from "./image/learn5.svg";
import learn6 from "./image/learn6.svg";

const logos = [learn, learn2, learn3, learn4, learn5, learn6];

const LearnGalary = () => {
  return (
    <div className="bg-[#f0f8ff]">
    <div className="bg-[#f0f8ff] py-10 px-4 md:px-8 lg:px-20 2xl:w-[50%] 2xl:m-auto">
      <h2 className="text-center text-gray-800 font-semibold text-lg sm:text-xl md:text-2xl mb-8">
        Learn from <span className="text-blue-600 font-bold">350+</span> leading universities and companies with us
      </h2>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-scroll inline-block">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-8 sm:h-10 md:h-12 mx-4 sm:mx-6 md:mx-8 inline-block grayscale opacity-70 hover:opacity-100 transition duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default LearnGalary;
