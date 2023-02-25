import Dragoon from '../BeybladePartsImages/Dragoon.png';
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
        <span>
          <img src={Dragoon} className="App-logo" alt="logo" />
        </span>
        <p>
        </p>
        <button className="enter-button" onClick={() => navigate('/Main')}>
          Enter
        </button>
      </header>
    </div>
  );
}

export default Home;
