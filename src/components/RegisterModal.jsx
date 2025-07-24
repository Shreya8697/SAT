import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterModal = ({ isRegisterOpen, setIsRegisterOpen, registerForm, setRegisterForm, handleRegister }) => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  if (!isRegisterOpen) return null;

  const handleRegisterWithRedirect = async () => {
    try {
      setError(null);
      setIsRedirecting(true);
      
      await handleRegister();
      setRegistrationSuccess(true);
      
      setTimeout(() => {
        navigate('/free-demo-videos');
      }, 2000);
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error.message || 'Registration failed. Please try again.');
      setIsRedirecting(false);
    }
  };

  const handleCloseModal = () => {
    if (!isRedirecting) {
      setIsRegisterOpen(false);
      setError(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {registrationSuccess ? 'Success!' : 'Create Account'}
          </h2>
          <button 
            onClick={handleCloseModal}
            className={`text-gray-500 hover:text-gray-800 ${isRedirecting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isRedirecting}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {registrationSuccess ? (
          <div className="space-y-4 sm:space-y-6 text-center">
            <p className="text-green-600 text-base sm:text-lg mb-3 sm:mb-4">
              Now you can access the free demo videos!
            </p>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base animate-pulse">
              Redirecting you to demo videos...
            </p>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                value={registerForm.name}
                onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                disabled={isRedirecting}
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                disabled={isRedirecting}
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
                value={registerForm.password}
                onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                disabled={isRedirecting}
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                value={registerForm.confirmPassword}
                onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                disabled={isRedirecting}
              />
            </div>

            <button
              onClick={handleRegisterWithRedirect}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium sm:font-semibold transition-all flex justify-center items-center text-sm sm:text-base ${
                isRedirecting 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:from-blue-700 hover:to-purple-700'
              }`}
              disabled={isRedirecting}
            >
              {isRedirecting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;


