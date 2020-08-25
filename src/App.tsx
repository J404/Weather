import React from 'react';
import './App.css';

import Subtitle from './Subtitle';

function App() {
  return (
    <div className="App text-white bg-gray-900 w-screen h-screen">
      <h2 className="text-6xl font-header">Weather</h2>
      <Subtitle message='Example subtitle'/>
    </div>
  );
}

export default App;
