import { Menu } from 'lucide-react';

const Header = ({ setIsRegisterOpen, setIsMobileMenuOpen, isMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">SAT<span className="text-blue-600">Pro</span></h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-800 hover:text-blue-600 transition-colors">Home</a>
              <a href="#demos" className="text-gray-800 hover:text-blue-600 transition-colors">Demo Lectures</a>
              <a href="#testimonials" className="text-gray-800 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors">About</a>
              <button 
                onClick={() => setIsRegisterOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6 text-gray-900" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Home</a>
            <a href="#demos" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Demo Lectures</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Testimonials</a>
            <a href="#about" className="block px-3 py-2 text-gray-800 hover:text-blue-600">About</a>
            <button 
              onClick={() => setIsRegisterOpen(true)}
              className="block w-full text-left px-3 py-2 text-blue-600 hover:text-blue-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
