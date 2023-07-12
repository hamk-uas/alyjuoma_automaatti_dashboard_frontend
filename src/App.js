import './App.css';

import Header from './components/Header/Header';

import { useState, useEffect } from 'react';

function App() {
  // const [data, setData] = useState([]);
  return (
    <div className="App">
      <Header />

      <h1 className='gradient-text'>
        TEST FRONTEND
      </h1>

      <p className='gradient-text'>
        No data to serve so far. This page is just a test page.
      </p>
    </div>
  );
}

export default App;
