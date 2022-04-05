import React from 'react';
import './App.css';
import Main from './pages/main/Main';
import Navbar from './pages/navBar/Navbar'
import { MovieProvider } from './contexts/MovieContext';
import { UserProvider } from './contexts/UserContext';
function App() {
  return (
    <div className="App">
      <MovieProvider>
        <UserProvider>
          <Navbar></Navbar>
          <Main></Main>
        </UserProvider>
      </MovieProvider>
     
    </div>
  );
}

export default App;
