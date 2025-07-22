import { Users, Award, BookOpen } from 'lucide-react';

const HeroSection = ({ setIsRegisterOpen }) => {
  return (
    <section id="home" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ace Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">SAT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of students who've improved their SAT scores with our expert-led lectures and proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsRegisterOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Free Trial
            </button>
            <a href="#demos" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-gray-300">Students Enrolled</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">200+</h3>
              <p className="text-gray-300">Average Score Improvement</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <BookOpen className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-gray-300">Hours of Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;