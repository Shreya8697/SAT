import { X } from 'lucide-react';
import { useState } from 'react';

const RegisterModal = ({ isRegisterOpen, setIsRegisterOpen, registerForm, setRegisterForm, handleRegister }) => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (!isRegisterOpen) return null;

  // Modified handle register function
  const handleRegisterWithRedirect = async () => {
    try {
      await handleRegister(); // Assuming handleRegister is an async function
      setRegistrationSuccess(true);
      
      // Show success message for 3 seconds then redirect
      setIsRedirecting(true);
      setTimeout(() => {
        window.location.href = '/free-demo-videos'; // Replace with your actual demo videos URL
      }, 3000);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-md border border-white/20">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {registrationSuccess ? 'Registration Successful!' : 'Create Account'}
          </h2>
          <button 
            onClick={() => setIsRegisterOpen(false)}
            className="text-gray-400 hover:text-white"
            disabled={isRedirecting}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {registrationSuccess ? (
          <div className="space-y-6">
            <div className="text-center py-4">
              <p className="text-green-400 text-lg mb-4">
                Now you can access the free demo videos!
              </p>
              {isRedirecting && (
                <p className="text-gray-300 animate-pulse">
                  Redirecting you now...
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Input Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                value={registerForm.name}
                onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
                value={registerForm.password}
                onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                value={registerForm.confirmPassword}
                onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
              />
            </div>

            {/* Register Button */}
            <button
              onClick={handleRegisterWithRedirect}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              disabled={isRedirecting}
            >
              Create Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;