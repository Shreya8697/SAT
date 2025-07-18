import { Menu } from 'lucide-react';

const Header = ({ setIsRegisterOpen, setIsMobileMenuOpen, isMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">SAT<span className="text-blue-400">Pro</span></h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
              <a href="#demos" className="text-white hover:text-blue-400 transition-colors">Demo Lectures</a>
              <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">Testimonials</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
              <button 
                onClick={() => setIsRegisterOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-white hover:text-blue-400">Home</a>
            <a href="#demos" className="block px-3 py-2 text-white hover:text-blue-400">Demo Lectures</a>
            <a href="#testimonials" className="block px-3 py-2 text-white hover:text-blue-400">Testimonials</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-blue-400">About</a>
            <button 
              onClick={() => setIsRegisterOpen(true)}
              className="block w-full text-left px-3 py-2 text-blue-400 hover:text-blue-300"
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