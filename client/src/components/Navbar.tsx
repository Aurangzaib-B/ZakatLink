import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 rounded-lg">
              <span className="text-white text-xl font-bold">Z</span>
            </div>
            <span className="text-2xl font-bold text-emerald-600">ZakatLink</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-emerald-600 font-medium transition duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-emerald-600 font-medium transition duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-emerald-600 font-medium transition duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-emerald-600 hover:text-emerald-700 font-medium transition duration-200"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-emerald-600 hover:text-emerald-700 font-medium transition duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition duration-200 shadow-sm"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
