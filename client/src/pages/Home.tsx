import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to ZakatLink
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Connecting students in need with generous donors
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition duration-200"
          >
            Sign In
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-semibold mb-2">For Students</h3>
            <p className="text-gray-600">Request financial assistance for your education</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">💝</div>
            <h3 className="text-xl font-semibold mb-2">For Donors</h3>
            <p className="text-gray-600">Support deserving students with your Zakat</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure & Transparent</h3>
            <p className="text-gray-600">Safe and verified platform for all users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
