import Dragoon from '../Dragoon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Beyblade Randomiser
        </h1>
        <img src={Dragoon} className="App-logo" alt="logo" />
        <p>
        </p>
        <button onClick={() => navigate('/Main')}>
          Enter
        </button>
      </header>
    </div>
  );
}

export default Home;
