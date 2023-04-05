import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Conditions } from './components/Conditions';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Slopeside</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
