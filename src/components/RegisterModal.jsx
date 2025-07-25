import { X, User, Mail, Phone, Key, MapPin, Home, School, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const RegisterModal = ({ isRegisterOpen, setIsRegisterOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    otp: '',
    city: '',
    pincode: '',
    currentSchool: '',
    classLevel: ''
  });

  const [otpSent, setOtpSent] = useState(false);

  if (!isRegisterOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    setOtpSent(true);
    alert('OTP sent to your mobile number!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
    setIsRegisterOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative my-8">
        {/* Close Button */}
        <button
          onClick={() => setIsRegisterOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
          Speak to a Counsellor
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className="sr-only">Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Mobile + OTP */}
          <div className="relative">
            <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
            <div className="flex rounded-md shadow-sm">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="pl-10 w-full border border-gray-300 rounded-l-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <button
                onClick={handleSendOtp}
                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
              >
                Send OTP
              </button>
            </div>
          </div>

          {/* OTP Field */}
          {otpSent && (
            <div className="relative">
              <label htmlFor="otp" className="sr-only">Enter OTP</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          )}

          {/* City */}
          <div className="relative">
            <label htmlFor="city" className="sr-only">City</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="city"
                name="city"
                type="text"
                required
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Pincode */}
          <div className="relative">
            <label htmlFor="pincode" className="sr-only">Pincode</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Home className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="pincode"
                name="pincode"
                type="text"
                required
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Current School */}
          <div className="relative">
            <label htmlFor="currentSchool" className="sr-only">Current School</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <School className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="currentSchool"
                name="currentSchool"
                type="text"
                required
                placeholder="Current School"
                value={formData.currentSchool}
                onChange={handleChange}
                className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Class Level */}
          <div className="relative">
            <label htmlFor="classLevel" className="sr-only">Class Level</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <GraduationCap className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="classLevel"
                name="classLevel"
                required
                value={formData.classLevel}
                onChange={handleChange}
                className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none bg-white"
              >
                <option value="">Select class level</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;