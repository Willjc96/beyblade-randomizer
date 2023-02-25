import Dragoon from '../BeybladePartsImages/Dragoon.png';
import React from 'react';
import Nav from '../Components/Nav';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <span>
          <img src={Dragoon} className="App-logo" alt="logo" />
        </span>
      </header>
    </div >
  );
}

export default Main;
