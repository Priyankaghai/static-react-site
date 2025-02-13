import React from 'react';
import './App.css';

function App() {
  // This will log when the component renders
  console.log('App component is rendering!');
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Static Website!</h1>
        <p>This is a simple static site built with React.</p>
        <p>Enjoy exploring!</p>
      </header>
    </div>
  );
}

export default App;
