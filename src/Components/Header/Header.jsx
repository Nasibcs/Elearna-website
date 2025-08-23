import { useState, useEffect, useRef } from "react";
import logo from "./images/logo.svg";
import { FaOpencart, FaBars, FaTimes } from "react-icons/fa";
import { TiPhoneOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
      {
        title: "Free Courses",
        desc: "Free learning resources for skill development.",
        items: ["Course A", "Course B"],
      },
      {
        title: "Finance",
        desc: "Understanding corporate finance and investments",
        items: ["Corporate Finance", "Investment", "Budgeting"],
      },
      {
        title: "Design",
        desc: "Advanced photoshop techniques for designers",
        items: ["Graphic Design", "UX Design"],
      },
      {
        title: "Management",
        desc: "Crisis management and problem-solving strategies",
        items: ["Crisis Management", "Strategic Planning"],
      },
      {
        title: "Development",
        desc: "Building single page applications with Angular",
        items: ["Web Dev", "Mobile Apps"],
      },
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


    const location = useLocation();


  if (location.pathname === "/register" || location.pathname === "/login" || location.pathname==="/cart"
  ) {
    return null;
  }


  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoverIndex(null);
    }, 180);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 text-sm">
      {/* Top Bar */}
      <div
        className={`hidden w-full flex-col md:flex-row items-center justify-between px-4 py-2 text-white ${
          isScrolled ? "bg-[#0f252a]" : "bg-navOverlay"
        } transition-all`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center w-full md:w-1/2 justify-center md:justify-start text-center sm:text-left">
          <p className="mr-2 text-xs">Interested in online coaching?</p>
          <a
            href="#"
            className="flex items-center justify-center space-x-1 mt-1 sm:mt-0"
          >
            <span>Contact us</span>
            <TiPhoneOutline className="text-lg" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end w-full md:w-1/2 mt-1 md:mt-0 space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-right">
          <p className="cursor-pointer hover:text-yellow-400 text-xs">
            support@example.com
          </p>
          <p className="cursor-pointer hover:text-yellow-400 text-xs">
            Call: (888) 123 4567
          </p>
        </div>
      </div>

      <div
        className={`w-full flex items-center justify-between px-4 py-3 text-white md:h-[5rem] ${
          isScrolled ? "bg-[#011a19]" : "bg-navOverlay"
        } transition-all`}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32 h-6" />
        </Link>

        <ul className="hidden lg:flex space-x-6 font-medium">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className="relative cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter(index)}
              onBlur={handleMouseLeave}
            >
              <div className="flex items-center hover:text-yellow-500 select-none">
                {item.name}
                <IoIosArrowDown className="ml-1" />
              </div>

              {/* Mega menu (desktop) */}
              {item.mega && (
                <div
                  className={`absolute top-full -left-36 mt-2 w-[750px] rounded-md p-6 shadow-xl z-50 bg-white text-black border-b-4 border-yellow-500 transform transition-all duration-200
                    ${
                      hoverIndex === index
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-4 gap-6 ">
                    {item.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {section.title}
                        </h3>
                        {section.desc && (
                          <p className="text-xs text-gray-500 mb-2">
                            {section.desc}
                          </p>
                        )}
                        <ul className="text-sm space-y-1">
                          {section.items.map((text, i) => (
                            <li
                              key={i}
                              className="hover:text-yellow-600 cursor-pointer transition-colors duration-200"
                            >
                              {text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* CTA Box */}
                    <div className="col-span-4 bg-gray-50 border rounded-md p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Increase your potential earnings
                        </h4>
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet scelerisque integer
                          adipiscing velit sed.
                        </p>
                      </div>
                      <button className="bg-yellow-500 text-white px-3 py-2 rounded-md hover:bg-yellow-600 transition">
                        →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Simple dropdown (desktop) */}
              {item.dropdown && (
                <ul
                  className={`absolute top-full left-0 mt-2 bg-white text-black w-44 shadow-lg rounded-md z-50 border-b-4 border-yellow-500 transform transition-all duration-200
                    ${
                      hoverIndex === index
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown.map((subItem, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:text-yellow-600 cursor-pointer transition-colors duration-200"
                    >
                      <Link to={subItem.path}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative">
            <Link to="cart">
            <FaOpencart className="text-2xl hover:text-yellow-500 cursor-pointer" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
            </Link>
          </div>
          <div className="space-x-2 text-sm">
            <Link to="/login" className="hover:text-yellow-400">
              Login
            </Link>
            <span>|</span>
            <Link to="/register" className="hover:text-yellow-400">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-4 text-black">
          <ul className="space-y-2 font-medium">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <div
                  className="flex justify-between items-center cursor-pointer hover:text-indigo-600"
                  onClick={() =>
                    setMobileOpenIndex(
                      mobileOpenIndex === index ? null : index
                    )
                  }
                >
                  <span>{item.name}</span>
                  {(item.dropdown || item.mega) && <IoIosArrowDown />}
                </div>

                {(item.dropdown || item.mega) &&
                  mobileOpenIndex === index && (
                    <ul className="ml-4 mt-1 text-sm space-y-1">
                      {item.dropdown &&
                        item.dropdown.map((subItem, i) => (
                          <li key={i}>
                            <Link
                              to={subItem.path}
                              className="hover:text-indigo-600"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}

                      {item.sections &&
                        item.sections.map((section, sIdx) => (
                          <li key={sIdx} className="mt-2">
                            <div className="font-semibold">
                              {section.title}
                            </div>
                            <ul className="ml-3 mt-1 space-y-1 text-sm">
                              {section.items.map((itm, idx) => (
                                <li
                                  key={idx}
                                  className="hover:text-indigo-600"
                                >
                                  {itm}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
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
            <a href="#" className="hover:text-indigo-500">
              Login
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-indigo-500">
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
