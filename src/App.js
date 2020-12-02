import React from 'react';

import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
