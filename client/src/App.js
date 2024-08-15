import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Timeline from './pages/Timeline';
import Animations from './pages/Animations';
import Games from './pages/Games';

// Startup:
// npm run dev  -- backend
// npm start    -- frontend

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;