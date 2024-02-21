import React from 'react'; 
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import GameBoard from './components/GameBoard'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/game" element={<GameBoard />} />
        </Routes>
     
    </Router>
     
  )
};