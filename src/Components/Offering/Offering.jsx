import image1 from "./images/image1.webp";
import image2 from "./images/image2.webp";

export default function Offering() {
  return (
<div className="p-2 w-full md:h-[75rem] lg:h-[45rem] overflow-hidden 2xl:flex 2xl:justify-center
">
  <div className="grid grid-rows-2 justify-evenly lg:grid-cols-2 lg:gap-3 xl:gap-14
    2xl:w-[50%]">
    {/* 🔸 Left Image Section */}
    <div className="grid relative top-10">
      
      {/* Image 1 */}
      <div className="absolute w-[10rem] z-20 shadow-[0_5px_40px_rgba(0,0,0,0.3)]
      rounded top-[100px] mobileL:w-[14rem] md:w-[22rem] md:left-10 md:top-44
      lg:w-[17rem] lg:top-60 lg:left-[10px]
      xl:w-[20rem] xl:top-58 xl:left-16 mobileS:left-[20px]"
      >
        <img src={image2} alt="study" className="w-[100%] h-auto rounded " />
      </div>

      {/* Image 2 */}
      <div className="absolute z-10 w-[11rem] shadow-[0_5px_40px_rgba(0,0,0,0.3)]
      rounded right-3 top-6 mobileL:w-[14rem] md:w-[22rem] md:right-10
      lg:w-[17rem] lg:top-10 
      xl:w-[20rem] mobileS:right-[80px] mobileL:left-[11rem] md:left-[21rem] lg:left-[14rem] xl:left-[20rem] 2xl:left-[20rem] mobileM:left-[10rem]">
        <img src={image1} alt="study" className="w-[100%] h-auto rounded" />
      </div>

      {/* 🔹 Floating Badge */}
      <div className="absolute top-7 z-30 bg-[#012d2c] w-[180px] h-[60px] rounded text-white
      flex mobileL:w-[210px] md:w-[340px] md:left-9 md:h-[120px]
      lg:w-[270px] lg:h-[90px] lg:top-28 lg:left-3
      xl:w-[16rem] xl:left-32">

        <div className="text-2xl w-[60%] flex justify-center items-center ">
          <h1 className="text-yellow-500 font-semibold md:text-6xl
          lg:text-4xl">50+</h1></div>
        <div className="w-[80%] flex flex-col justify-center ">
          <h1 className="text-xs md:text-2xl lg:text-xl">✨Free courses</h1>
          <p className="text-xs md:text-2xl lg:text-xl">listed online </p>
        </div>
      </div>
    </div>

    {/* 🔸 Right Content Section */}
    <div className="p-1 relative bottom-16 md:top-60 md:p-3 lg:top-[45px] xl:top-32 ">
      
      {/* Headings */}
      <div className="mobileL:mt-4 md:top-24">
        <h1 className="text-sm md:text-xl xl:text-xl">What we offer</h1>
        <h2 className="text-2xl font-semibold md:mt-2 md:text-3xl md:font-semibold
        lg:text-5xl ">
          Personalized learning <br className="md:hidden" />
          for your ambitions
        </h2>
        <p className=" text-gray-500 md:mt-2 lg:mt-8 lg:text-xl">
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.
        </p>
      </div>

      {/* Bullet Points */}
      <div className=" p-5 font-semibold md:grid md:grid-cols-2 lg:text-[18px] lg:gap-14">
        <ul className="list-disc">
          <li>Skill-based instruction</li>
          <li className="md:mt-2">Global certification</li>
        </ul>
        <ul className="list-disc">
          <li>Analytics and insights</li>
          <li className="md:mt-2">Customizable courses</li>
        </ul>
      </div>

      {/* Bottom CTA Box */}
      <div className="p-5 bg-[#e8f1f4] rounded grid grid-rows-2 md:grid-cols-2 md:justify-between md:h-[10rem]
      relative md:top-8 md:w-[43rem] w-[23rem] 
      lg:w-[30rem] xl:w-[34rem]">
        <div className="md:mt-4 md:w-[30rem] lg:w-[14rem]">
          <h1 className="font-bold md:text-2xl lg:text-xl">Still have questions?</h1>
          <p className=" text-gray-600 md:text-xl md:mt-2 lg:text-sm">Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
        </div>
        <button className="bg-[#011c1d] w-[110px] h-12 text-white rounded
        relative top-5 md:top-8 md:-right-52 lg:-right-10 lg:top-10 lg:w-[10rem]">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>

  );
}
