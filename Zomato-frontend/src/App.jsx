import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Signup from './Components/Signup'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ExplorePage from './Components/ExplorePage'
import UserProfile from './Components/UserProfile'
import Zomatostats from './Components/Zomatostats'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/Profile" element={<UserProfile />} />
          <Route path="/zomatostats" element={<Zomatostats />} />
          <Route path="/restaurant/:id" element={<ExplorePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
