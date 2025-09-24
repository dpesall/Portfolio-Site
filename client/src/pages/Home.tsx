import React from 'react';
import Navigation from '../components/layout/Navigation';
import Hero from '../components/sections/Hero';

const Home: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <Hero />
      </div>
    );
  };

export default Home;
