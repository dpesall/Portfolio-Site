import React from 'react';
import Navigation from '../components/layout/Navigation';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <section className="min-h-screen bg-gray-900 pt-16 flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Let's <span className="text-blue-400">Connect</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Ready to discuss your next project or explore new opportunities
              </p>
            </div>

            {/* Professional Message */}
            <div className="bg-gray-800/50 rounded-2xl p-8 sm:p-12 border border-gray-700/50 max-w-3xl mx-auto">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm always interested in exploring new opportunities and collaborations.
                  Whether you're looking to discuss a potential project, partnership, or
                  career opportunity, I'd love to hear from you.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With my experience in full-stack development, cloud engineering, and
                  working with mission-critical applications, I'm excited to contribute
                  to innovative projects and dynamic teams.
                </p>
              </div>

              {/* Contact Options */}
              <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://www.linkedin.com/in/drew-pesall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:pesallandrew@gmail.com"
                  className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.174l10.19 7.727 10.19-7.727h.174c.904 0 1.636.749 1.636 1.636z"/>
                  </svg>
                  Send an Email
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;