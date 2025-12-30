import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connecting Students in Need with Generous Donors
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-emerald-50">
              ZakatLink bridges the gap between education and opportunity through transparent and secure Zakat donations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition duration-200 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/login"
                className="bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-emerald-900 transition duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to make a difference in students' lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mx-auto mb-6">
                <span className="text-3xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Create Account</h3>
              <p className="text-gray-600 leading-relaxed">
                Register as a student in need or a generous donor. Choose your role and complete your profile in minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mx-auto mb-6">
                <span className="text-3xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Connect & Verify</h3>
              <p className="text-gray-600 leading-relaxed">
                Students submit requests with verification. Donors browse verified profiles and choose who to support.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mx-auto mb-6">
                <span className="text-3xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Make Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure donations are processed transparently. Students receive support and donors see the real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">For Students</h3>
              <p className="text-gray-600 leading-relaxed">
                Request financial assistance for tuition, books, and living expenses. Get connected with donors who want to help.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">For Donors</h3>
              <p className="text-gray-600 leading-relaxed">
                Support deserving students with your Zakat. Browse verified requests and make a lasting impact on education.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Secure & Transparent</h3>
              <p className="text-gray-600 leading-relaxed">
                Safe, verified platform with complete transparency. Every donation is tracked and reported with full accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join our community of students and donors today
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition duration-200 shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
