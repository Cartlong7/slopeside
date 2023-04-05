import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Conditions } from './components/Conditions';
import { useState } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Slopeside</h1>
    </div>
  );

  // React Router example below
  // This will be used to pass the current state of the application to a specific path

  // return (
  //   <>
  //     <nav>
  //       <ul>
  //         <li><Link to='/'>Conditions</Link></li>
  //       </ul>
  //     </nav>
    
  //     <Routes>
  //       <Route path='/' element={<Conditions />} />
  //     </Routes>
  //   </>
  // );
}

export default App;
