import React from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='prediction-text'>Weather Predictions</h1>
      </header>
      <main>
        <Forecast />
      </main>
    </div>
  );
}

export default App;
