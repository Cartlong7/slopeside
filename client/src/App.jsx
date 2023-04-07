import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ResortContainer from './components/ResortContainer';

function App() {

  return (
    <div className="App">
      <h1>Slopeside</h1>
      <h3>A unified front for skiing conditions.</h3>
      <ResortContainer/>
    </div>
  );
}

export default App;
