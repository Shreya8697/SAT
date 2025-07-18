const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-md border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">SAT<span className="text-blue-400">Pro</span></h3>
            <p className="text-gray-300">Empowering students to achieve their highest SAT scores through expert instruction and proven strategies.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#demos" className="text-gray-300 hover:text-white transition-colors">Demo Lectures</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Practice Tests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Study Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Score Calculator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">College Finder</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-300">&copy; 2024 SATpro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;