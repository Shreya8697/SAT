import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = ({ setIsRegisterOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">
                  SAT<span className="text-blue-600">Pro</span>
                </h1>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#demos"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Demo Lectures
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#about"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  About
                </a>
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Blurred backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Slide-in panel */}
          <div
            className={`ml-auto w-4/5 max-w-xs h-full bg-white shadow-xl rounded-10l-xl transform transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#demos", label: "Demo Lectures" },
                  { href: "#testimonials", label: "Testimonials" },
                  { href: "#about", label: "About" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* CTA button */}
              <div className="p-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsRegisterOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition-all"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
