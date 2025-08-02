// AboutTwoGalary.tsx
import study from "./images/study2.jpg";

const data = [
  {
    image: study,
    title: "Master online learning with proven strategies",
    author: "Samantha Dick",
    date: "18.10.2024",
  },
  {
    image: study,
    title: "The role of technology in modern classrooms",
    author: "Samantha Dick",
    date: "16.10.2024",
  },
  {
    image: study,
    title: "How globalization is shaping curriculum development",
    author: "Edwin Waters",
    date: "12.10.2024",
  },
  {
    image: study,
    title: "How to enhance your learning experience today",
    author: "Edwin Waters",
    date: "10.10.2024",
  },
  {
    image: study,
    title: "The evolution of teaching tools in the 21st century",
    author: "Edward Braun",
    date: "07.10.2024",
  },
  {
    image: study,
    title: "How personalized learning is changing education",
    author: "Gerald Henson",
    date: "04.10.2024",
  },
  {
    image: study,
    title: "The role of parental involvement in academic achievement",
    author: "Jesse Johnson",
    date: "01.10.2024",
  },
  {
    image: study,
    title: "Empowering teachers with student behavior data",
    author: "Nina Lefler",
    date: "30.09.2024",
  },
];

export default function AboutTwoGalary() {
  return (
    <div className="w-full bg-white px-4 py-10 md:flex md:gap-10 justify-between border border-blue-200 rounded-xl shadow-md">
      {/* Sticky Left Section */}
      <div className="md:w-1/2 lg:w-1/3 mb-10 md:mb-0 sticky top-10 self-start border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <img src={study} alt="Visual learning" className="w-full h-60 object-cover" />
        <div className="bg-white p-5">
          <p className="text-sm text-gray-500">12.10.2024 • Nina Lefler</p>
          <h2 className="text-xl font-bold mt-2 leading-tight">
            Improve knowledge retention with visual learning
          </h2>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum elit. Cras mollis aliquam orci mauris sagittis
            fermentum eu diam vulputate.
          </p>
        </div>
      </div>

      {/* Scrollable Right Section */}
      <div className="w-[45rem] h-[45rem] overflow-y-auto pr-2 flex flex-wrap gap-4 custom-scrollbar">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[14.5rem] bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt="thumbnail"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500">
                {item.date} <span className="mx-1">•</span>{" "}
                <span className="font-semibold uppercase">{item.author}</span>
              </p>
              <h3 className="text-sm font-semibold text-black mt-2 leading-snug hover:text-blue-600 cursor-pointer transition duration-200">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
