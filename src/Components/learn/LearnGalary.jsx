import "../../LogosScroll.css";
import learn from "./image/learn.svg";
import learn2 from "./image/learn2.svg";
import learn3 from "./image/learn3.svg";
import learn4 from "./image/learn4.svg";
import learn5 from "./image/learn5.svg";
import learn6 from "./image/learn6.svg";

const logos = [learn,learn2,learn3,learn4,learn5,learn6];

const LearnGalary = () => {
  return (
    <div className="bg-[#f0f8ff] py-10">
      <h2 className="text-center text-gray-800 font-semibold text-xl mb-8">
        Learn from 350+ leading universities and companies with us
      </h2>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-scroll inline-block">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-12 mx-8 inline-block grayscale opacity-70 hover:opacity-100 transition duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnGalary;
