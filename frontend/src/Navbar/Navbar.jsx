import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Assuming react-router-dom usage based on package.json

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
      { name: "Editorial Board", href: "/editorial-board" },
    { name: "Journal Portfolio ", href: "/journals" },
    { name: "For Authors", href: "/for-authors" },
    { name: "For Reviewers", href: "/for-reviewers" }, // Shortened for better fit
  
    { name: "Publication Ethics", href: "/ethics" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-2 border-b border-gray-100"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo & Brand */}
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 shrink-0 cursor-pointer">
            <img
              src="/Images/Helix Journals.webp"
              alt="Helix Journals Logo"
              className="h-40 w-40 object-contain hover:scale-105 transition-transform duration-300"
            loading="lazy" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                  scrolled ? "text-gray-600 hover:text-blue-600" : "text-gray-700 hover:text-blue-600"
                } ${isActive ? "text-blue-600" : ""}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </Link>
            )})}
          </div>

           {/* Mobile Menu Button */}
           <div className="xl:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                scrolled ? "text-gray-600 hover:bg-gray-100" : "text-gray-700 hover:bg-white/50"
              }`}
              aria-expanded={open}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${open ? "rotate-45 translate-x-px" : ""}`} />
                <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${open ? "-rotate-45 translate-x-px" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`xl:hidden fixed inset-0 z-40 bg-gray-800/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`xl:hidden fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          <div className="flex items-center justify-between px-4 pt-5 pb-4 border-b border-gray-100">
             <div className="flex items-center gap-2">
              <img src="/Images/Helix Journals.webp" alt="Logo" className="h-12 w-auto" loading="lazy" />
             </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {link.name}
              </Link>
            )})}
          </div>
{/*           
          <div className="p-4 border-t border-gray-100">
             <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
               Sign In
             </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
