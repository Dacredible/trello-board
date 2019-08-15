import React from 'react';
import './App.scss';
import TrelloBoard from './components/TrelloBoard';

function App() {
  return (
    <div className="App">
      <nav>App Bar</nav>
      <header>Board Title</header>
      <TrelloBoard />
    </div>
  );
}

export default App;
