import { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import { FaOpencart, FaBars, FaTimes } from "react-icons/fa";
import { TiPhoneOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const navItems = [
  { name: "Home", dropdown: [
      { label: "Home one", path: "/homeone" },
      { label: "Home two", path: "/hometwo" },
      { label: "Home three", path: "/homethree" }
    ] },
  { name: "Courses", mega: true, sections: [
      { title: "Finance", items: ["Corporate Finance", "Investment", "Budgeting"] },
      { title: "Design", items: ["Graphic Design", "UX Design"] },
      { title: "Management", items: ["Crisis Management", "Strategic Planning"] },
      { title: "Development", items: ["Web Dev", "Mobile Apps"] }
    ] },
  { name: "Pages", dropdown: [
      { label: "About one", path: "/aboutone" },
      { label: "About two", path: "/about-two" },
      { label: "Course one", path: "/course-one" },
      { label: "Course two", path: "/course-two" },
      { label: "Course three", path: "/course-three" },
      { label: "FAQ", path: "/faq" },
      { label: "Pricing one", path: "/pricing-one" },
      { label: "Pricing two", path: "/pricing-two" },
      { label: "Pricing three", path: "/pricing-three" },
      { label: "Career", path: "/career" },
      { label: "Events", path: "/events" },
      { label: "Team", path: "/team" }
    ] },
  { name: "Blog", dropdown: [
      { label: "Blog one", path: "/blogone" },
      { label: "Blog two", path: "/blogtwo" },
      { label: "Blog three", path: "/blogthree" }
    ] },
  { name: "Contact", dropdown: [
      { label: "Contact one", path: "/contactone" },
      { label: "Contact two", path: "/contacttwo" },
      { label: "Contact three", path: "/contactthree" }
    ] }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 text-sm">
      <div className={`w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 text-white transition-all duration-300 ${isScrolled ? "bg-gray-500" : "bg-navOverlay"}`}>
        <div className="flex flex-col sm:flex-row sm:items-center w-full md:w-1/2 justify-center md:justify-start">
          <p className="mr-2 text-xs">Interested in online coaching?</p>
          <a href="#" className="flex items-center space-x-1">
            <span>Contact us</span>
            <TiPhoneOutline className="text-lg" />
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-end w-full md:w-1/2 mt-1 md:mt-0 space-x-4">
          <p className="cursor-pointer hover:text-xl">support@example.com</p>
          <p className="cursor-pointer hover:text-xl">Call: (888) 123 4567</p>
        </div>
      </div>

      <div className={`w-full flex items-center justify-between px-4 py-3 text-white transition-all duration-300 ${isScrolled ? "bg-gray-500" : "bg-navOverlay"}`}>
        <Link to="/" element={<Home />}>
          <img src={logo} alt="Logo" className="w-32 h-6" />
        </Link>

        <ul className="hidden lg:flex space-x-6 font-medium">
          {navItems.map(item => (
            <li key={item.name} className="relative group cursor-pointer">
              <div className="flex items-center hover:text-orange-300">
                {item.name}<IoIosArrowDown className="ml-1" />
              </div>
              {item.mega ? (
                <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white text-black w-[700px] shadow-lg rounded-lg p-6 z-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {item.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-gray-800 mb-2">{section.title}</h3>
                        <ul className="text-sm space-y-1">
                          {section.items.map((text, i) => (
                            <li key={i} className="hover:text-orange-500 cursor-pointer">{text}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : item.dropdown && (
                <ul className="absolute top-full left-0 bg-white text-black w-44 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 text-sm">
                  {item.dropdown.map((subItem, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-100 hover:text-yellow-600">
                      <Link to={subItem.path}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative">
            <FaOpencart className="text-2xl hover:text-orange-300 cursor-pointer" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
          </div>
          <div className="space-x-2">
            <a href="#" className="hover:text-orange-300">Login</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-300">Register</a>
          </div>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-3 space-y-2 text-center text-black">
          <ul className="space-y-2 font-medium">
            {navItems.map(item => (
              <li key={item.name} className="hover:text-indigo-500 cursor-pointer">{item.name}</li>
            ))}
          </ul>
          <div className="mt-4">
            <div className="flex justify-center items-center relative">
              <FaOpencart className="text-2xl hover:text-indigo-500" />
              <span className="absolute -top-2 -right-4 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
            </div>
            <div>
              <a href="#" className="hover:text-indigo-500">Login</a> | <a href="#" className="hover:text-indigo-500">Register</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
