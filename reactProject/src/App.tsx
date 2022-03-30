import React from 'react';
import './App.css';
import Main from './pages/main/Main';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Main></Main>
      </MovieProvider>
     
    </div>
  );
}

export default App;
