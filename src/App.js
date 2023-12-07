import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage';
import Workout from './pages/Workout';
import Collections from './pages/Collections'
import CollectionsDetail from './pages/Collections_detail';
import Login from './components/Login/Login';
import About from './pages/About';
import Recipe from './pages/Recipe';
import Blog from './pages/Blog';
import Register from './components/Register/Register';
import User from './pages/User';
import Recommend from './pages/Recommend';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<User />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:courseId" element={<CollectionsDetail />} />
      <Route path="/collections/:courseId/days/:dayId" element={<Workout />} />
      <Route path='/recommend' element={<Recommend />} />
    </Routes>
  );
}

export default App;
