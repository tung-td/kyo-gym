import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Homepage} />
        {/* more route here */}
      </Routes>
    </Router>
  );
}

export default App;
