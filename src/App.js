
import './App.css';
import React from 'react'
import Login from './components/login/login'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useStateContext } from './contexts/ContextApp'
import Layout from './pages/Layout';




const App = () => {


  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/Login" />} >
        </Route>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Home" element={<Home />}/>
      </Routes>
  </Router>
  )
}

export default App