import { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import { FaOpencart, FaBars, FaTimes } from "react-icons/fa";
import { TiPhoneOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    dropdown: [
      { label: "Home one", path: "/homeone" },
      { label: "Home two", path: "#" },
      { label: "Home three", path: "#" },
    ],
  },
  {
    name: "Courses",
    mega: true,
    sections: [
      { title: "Finance", items: ["Corporate Finance", "Investment", "Budgeting"] },
      { title: "Design", items: ["Graphic Design", "UX Design"] },
      { title: "Management", items: ["Crisis Management", "Strategic Planning"] },
      { title: "Development", items: ["Web Dev", "Mobile Apps"] },
    ],
  },
  {
    name: "Pages",
    dropdown: [
      { label: "About one", path: "/aboutone" },
      { label: "About two", path: "#" },
      { label: "Course one", path: "#" },
      { label: "Course two", path: "#" },
      { label: "Course three", path: "#" },
      { label: "FAQ", path: "/faq" },
      { label: "Pricing one", path: "#" },
      { label: "Pricing two", path: "#" },
      { label: "Pricing three", path: "#" },
      { label: "Career", path: "#" },
      { label: "Events", path: "#" },
      { label: "Team", path: "#" },
    ],
  },
  {
    name: "Blog",
    dropdown: [
      { label: "Blog one", path: "/" },
      { label: "Blog two", path: "/blogtwo" },
      { label: "Blog three", path: "#" },
    ],
  },
  {
    name: "Contact",
    dropdown: [
      { label: "Contact one", path: "/contactone" },
      { label: "Contact two", path: "#" },
      { label: "Contact three", path: "#" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Mobile dropdown state

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 text-sm">
      {/* 🔹 Top Bar - hidden on mobile, visible md+ */}
      <div className={`hidden md:flex w-full flex-col md:flex-row items-center justify-between px-4 py-2 text-white ${isScrolled ? "bg-gray-700" : "bg-navOverlay"} transition-all`}>
        <div className="flex flex-col sm:flex-row sm:items-center w-full md:w-1/2 justify-center md:justify-start text-center sm:text-left">
          <p className="mr-2 text-xs">Interested in online coaching?</p>
          <a href="#" className="flex items-center justify-center space-x-1 mt-1 sm:mt-0">
            <span>Contact us</span>
            <TiPhoneOutline className="text-lg" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end w-full md:w-1/2 mt-1 md:mt-0 space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-right">
          <p className="cursor-pointer hover:text-yellow-400 text-xs">support@example.com</p>
          <p className="cursor-pointer hover:text-yellow-400 text-xs">Call: (888) 123 4567</p>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className={`w-full flex items-center justify-between px-4 py-3 text-white ${isScrolled ? "bg-gray-700" : "bg-navOverlay"} transition-all`}>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32 h-6" />
        </Link>

        {/* 🔹 Desktop Nav */}
        <ul className="hidden lg:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <div className="flex items-center hover:text-yellow-500">
                {item.name}
                <IoIosArrowDown className="ml-1" />
              </div>

              {/* Mega Menu */}
              {item.mega && (
                <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white text-black w-[700px] shadow-xl rounded-lg p-6 z-50">
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
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <ul className="absolute top-full left-0 bg-white text-black w-44 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 text-sm">
                  {item.dropdown.map((subItem, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-100 hover:text-orange-600">
                      <Link to={subItem.path}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* 🔹 Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative">
            <FaOpencart className="text-2xl hover:text-yellow-500 cursor-pointer" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
          </div>
          <div className="space-x-2 text-sm">
            <a href="#" className="hover:text-yellow-400">Login</a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-400">Register</a>
          </div>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-4 text-black">
          <ul className="space-y-2 font-medium">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <div
                  className="flex justify-between items-center cursor-pointer hover:text-indigo-600"
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                >
                  <span>{item.name}</span>
                  {(item.dropdown || item.mega) && <IoIosArrowDown />}
                </div>

                {/* Dropdown for mobile */}
                {(item.dropdown || item.mega) && openDropdown === index && (
                  <ul className="ml-4 mt-1 text-sm space-y-1">
                    {(item.dropdown || []).map((subItem, i) => (
                      <li key={i}>
                        <Link to={subItem.path} className="hover:text-indigo-600">
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                    {(item.sections || []).map((section) =>
                      section.items.map((itm, idx) => (
                        <li key={idx}>{itm}</li>
                      ))
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="relative flex justify-center items-center">
            <FaOpencart className="text-2xl hover:text-indigo-500" />
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          <div className="text-center">
            <a href="#" className="hover:text-indigo-500">Login</a> | <a href="#" className="hover:text-indigo-500">Register</a>
          </div>
        </div>
      )}
    </header>
  );
}
