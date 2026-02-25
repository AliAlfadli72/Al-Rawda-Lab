import { Link, useLocation } from "react-router-dom";
import { FaTooth, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "الخدمات", path: "/services" },
    { name: "المعرض", path: "/gallery" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <nav
      dir="rtl"
      className={`fixed w-full z-[100] transition-all duration-300 px-6 py-4 ${
        isScrolled || isOpen
          ? "bg-white shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group relative z-[110]">
          <div className="bg-gold p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <FaTooth className="text-slate-900 text-xl" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl tracking-tight leading-none ${isScrolled || isOpen ? "text-slate-900" : "text-white"}`}>
              مخبر الروضة
            </span>
            <span className="text-[10px] uppercase tracking-[2px] text-gold font-semibold">
              Dental Laboratory
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-colors hover:text-gold ${
                location.pathname === link.path 
                  ? "text-gold" 
                  : isScrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button & Burger */}
        <div className="flex items-center gap-4 relative z-[110]">
          <Link
            to="/doctors"
            className={`hidden md:block px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
              isScrolled
                ? "bg-slate-900 text-white hover:bg-gold hover:text-slate-900 shadow-md"
                : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-gold hover:text-slate-900"
            }`}
          >
            بوابة الأطباء
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl transition-colors ${isOpen || isScrolled ? "text-slate-900" : "text-white"}`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div className={`
        fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden
        ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"}
      `}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-2xl font-black transition-colors ${
              location.pathname === link.path ? "text-gold" : "text-slate-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/doctors"
          className="mt-4 bg-slate-900 text-gold px-10 py-4 rounded-2xl font-bold text-lg"
        >
          بوابة الأطباء
        </Link>
      </div>
    </nav>
  );
}