import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/home.component';

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <HomeComponent />
      </div>
    </div>
  );
}

export default App;
