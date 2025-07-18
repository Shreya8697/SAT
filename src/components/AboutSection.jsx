import { CheckCircle } from 'lucide-react';

const AboutSection = ({ setIsLoginOpen }) => {
  return (
    <section id="about" className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Choose SATpro?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Instructors</h3>
                  <p className="text-gray-300">Learn from PhD holders and SAT specialists with years of teaching experience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-gray-300">Our students consistently achieve 200+ point improvements on their SAT scores.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Comprehensive Content</h3>
                  <p className="text-gray-300">Complete coverage of all SAT sections with practice tests and detailed explanations.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Start?</h3>
            <p className="text-gray-300 mb-8">Join thousands of successful students and start your SAT preparation journey today.</p>
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;