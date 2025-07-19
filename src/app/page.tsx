export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="senior-section">
        <div className="senior-container">
          <div className="text-center">
            {/* Welcome message */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Hello! 👋
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-2">
                Welcome to Senior Welfare Guide
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-2">
                For seniors aged 65+ living worldwide
              </p>
              <p className="text-lg md:text-xl text-gray-500">
                Find welfare programs and government services easily
              </p>
            </div>

            {/* Feature illustration */}
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-6xl md:text-8xl">❤️</span>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Action Cards */}
      <section className="senior-section">
        <div className="senior-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Find Benefits Card */}
            <div className="senior-card group hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">👥</span>
                  </div>
                  <h3 className="senior-heading">
                    Find Benefits That Match You
                  </h3>
                  <p className="senior-text text-gray-600 mb-6">
                    Answer simple questions and receive personalized welfare program recommendations
                  </p>
                </div>
                <a href="/benefits" className="senior-button inline-flex items-center gap-3">
                  <span>Get Started</span>
                  <span>➡️</span>
                </a>
              </div>
            </div>

            {/* Browse Programs Card */}
            <div className="senior-card group hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📋</span>
                  </div>
                  <h3 className="senior-heading">
                    Browse All Welfare Programs
                  </h3>
                  <p className="senior-text text-gray-600 mb-6">
                    View and search all welfare programs available in your region
                  </p>
                </div>
                <a href="/programs" className="senior-button bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 inline-flex items-center gap-3">
                  <span>Browse Programs</span>
                  <span>➡️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="senior-section">
        <div className="senior-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="senior-card border-2 border-blue-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Safe and Trusted Service
                </h3>
                <p className="senior-text text-gray-600">
                  A government-certified service that prioritizes privacy protection and accessibility.
                  <br />
                  You can use it safely anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="bg-red-50 border-t-4 border-red-200 py-6">
        <div className="senior-container">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              🚨 Emergency Contacts
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-red-700">
              <a href="tel:119" className="emergency-contact">
                Fire/Medical: 119
              </a>
              <a href="tel:112" className="emergency-contact">
                Police: 112
              </a>
              <a href="tel:055-860-8000" className="emergency-contact">
                Local Welfare: 055-860-8000
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 