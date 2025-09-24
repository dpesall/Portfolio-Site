import React, { useState, useEffect } from 'react';
import Navigation from '../components/layout/Navigation';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('guess-nexus');

  const navigationItems = [
    {
      id: 'guess-nexus',
      title: 'Guess Nexus',
      color: 'blue',
      sections: [
        { id: 'guess-nexus', label: 'Overview' },
        { id: 'guess-nexus-features', label: 'Features' },
        { id: 'guess-nexus-stack', label: 'Tech Stack' },
        { id: 'guess-nexus-innovations', label: 'Innovations' }
      ]
    },
    {
      id: 'anthem-sigma',
      title: 'Anthem Sigma',
      color: 'purple',
      sections: [
        { id: 'anthem-sigma', label: 'Overview' },
        { id: 'anthem-sigma-features', label: 'Features' },
        { id: 'anthem-sigma-stack', label: 'Tech Details' },
        { id: 'anthem-sigma-highlights', label: 'Highlights' }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const project of navigationItems) {
        for (const section of project.sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getColorClasses = (color: string, isActive: boolean) => {
    const colorMap = {
      blue: isActive
        ? "text-blue-300 border-blue-400 bg-blue-400/10"
        : "text-blue-400 border-transparent hover:border-blue-400/50 hover:bg-blue-400/5",
      purple: isActive
        ? "text-purple-300 border-purple-400 bg-purple-400/10"
        : "text-purple-400 border-transparent hover:border-purple-400/50 hover:bg-purple-400/5"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };
  const gameFeatures = [
    {
      title: "5 Daily Games",
      description: "Slay the Spire card guessing, Pokemon identification, Age of Empires II units, Subnautica creatures, and Bible books challenges",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "User System",
      description: "Google OAuth integration, guest mode support, comprehensive achievement system, and competitive leaderboards",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      title: "Admin Dashboard",
      description: "Real-time analytics, user management, content moderation tools, and comprehensive activity tracking",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const technicalHighlights = [
    {
      title: "Performance Optimized",
      description: "Strategic database indexing, connection pooling, and query optimization for scalability"
    },
    {
      title: "Data Integrity Practices",
      description: "Database migrations for version control, calculate-on-demand architecture preventing stale data, comprehensive validation systems"
    },
    {
      title: "Security Implementation",
      description: "JWT authentication with httpOnly cookies, OAuth integration, input sanitization, CORS configuration for controlled access"
    },
    {
      title: "Scalable Architecture",
      description: "Modular game system design, efficient caching strategies, connection pooling, RESTful API with consistent response formats"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Sidebar Navigation */}
      <div className="hidden lg:block lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-64">
        <div className="flex h-full flex-col bg-gray-800/50 backdrop-blur-sm border-r border-gray-700/50">
          <div className="flex flex-1 flex-col overflow-y-auto pt-20 pb-6">
            <div className="px-6 py-4">
              <h2 className="text-lg font-semibold text-white mb-4">Projects</h2>
              <nav className="space-y-6">
                {navigationItems.map((project) => (
                  <div key={project.id} className="space-y-2">
                    <button
                      onClick={() => scrollToSection(project.id)}
                      className={`text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity duration-200 ${
                        project.sections.some(section => section.id === activeSection)
                          ? (project.color === 'blue' ? 'text-blue-300' : 'text-purple-300')
                          : (project.color === 'blue' ? 'text-blue-400' : 'text-purple-400')
                      }`}
                    >
                      {project.title}
                    </button>
                    <ul className="space-y-1">
                      {project.sections.map((section) => (
                        <li key={section.id}>
                          <button
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full text-left px-3 py-2 text-sm rounded-md border-l-2 transition-all duration-200 ${
                              getColorClasses(project.color, activeSection === section.id)
                            }`}
                          >
                            {section.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">

      {/* Hero Section */}
      <section id="guess-nexus" className="bg-gray-900 pt-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Guess <span className="text-blue-400">Nexus</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              A daily puzzle gaming platform featuring five unique games inspired by popular franchises,
              complete with user authentication, achievements, and comprehensive analytics.
            </p>

            <div className="flex justify-center">
              <a
                href="https://guessnexus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Try It Out
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="guess-nexus-features" className="bg-gray-800/50 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive gaming platform with multiple puzzle games, user management, and administrative tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section id="guess-nexus-stack" className="bg-gray-900 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built with modern technologies and best practices for performance, scalability, and maintainability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Frontend
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  React 18 with functional components and hooks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  React Router DOM v7 for navigation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  SCSS Modules with BEM naming convention
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Context API for state management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Custom hooks for game logic and API interactions
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Backend
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Node.js with Express.js framework
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  PostgreSQL database with migrations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  JWT Authentication with httpOnly cookies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Passport.js for Google OAuth integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  RESTful API with comprehensive error handling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section id="guess-nexus-innovations" className="bg-gray-800/50 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Innovations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced solutions to complex problems showcasing engineering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalHighlights.map((highlight, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">{highlight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Divider */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-700/50"></div>
        </div>
      </section>

      {/* Anthem Sigma Hero Section */}
      <section id="anthem-sigma" className="bg-gray-900 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Anthem <span className="text-purple-400">Sigma</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              A comprehensive cryptography education tool implementing classical cipher algorithms
              for learning, analysis, and recreational use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/dpesall/Anthem-Sigma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
              <a
                href="https://github.com/dpesall/Anthem-Sigma/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold text-lg border border-gray-700 hover:border-gray-600 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Anthem Sigma Key Features */}
      <section id="anthem-sigma-features" className="bg-gray-800/50 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive cryptography toolkit with cipher implementations and analysis tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-xl font-semibold text-white ml-3">5 Classical Ciphers</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Caesar, Keyword, Affine, Vigenère, and Hill cipher implementations with customizable parameters and mathematical transformations</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-xl font-semibold text-white ml-3">Cryptanalysis Tools</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Letter frequency analysis, N-gram pattern analysis, and monospace display for examining cipher text and breaking unknown encryptions</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-semibold text-white ml-3">Educational Interface</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">File upload support, real-time validation, multi-page navigation, and built-in documentation for comprehensive learning experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Anthem Sigma Technical Stack */}
      <section id="anthem-sigma-stack" className="bg-gray-900 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Details</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Windows desktop application built with modern .NET technologies
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Platform & Technology
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Windows Desktop Application
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    C# with Windows Forms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    .NET Framework 4.7.2
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    UTF-8 file encoding support
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Educational Purpose
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Cryptography students and educators
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Computer science curriculum support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Puzzle enthusiasts and hobbyists
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Security awareness training
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anthem Sigma Technical Highlights */}
      <section id="anthem-sigma-highlights" className="bg-gray-800/50 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Highlights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing desktop application development and cryptographic algorithm implementation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Algorithm Implementation</h3>
              <p className="text-gray-300 leading-relaxed">Five different cipher methods with proper mathematical transformations, matrix operations, and modular arithmetic calculations</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Analysis Capabilities</h3>
              <p className="text-gray-300 leading-relaxed">Statistical analysis tools for cryptographic pattern recognition, frequency distribution, and N-gram pattern detection</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">User Experience Design</h3>
              <p className="text-gray-300 leading-relaxed">Intuitive Windows Forms interface with real-time validation, file processing capabilities, and organized multi-page navigation</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Educational Focus</h3>
              <p className="text-gray-300 leading-relaxed">Built-in documentation, usage instructions, and educational content designed specifically for learning cryptographic concepts</p>
            </div>
          </div>
        </div>
      </section>

      </div> {/* End of Main Content */}
    </div>
  );
};

export default Portfolio;