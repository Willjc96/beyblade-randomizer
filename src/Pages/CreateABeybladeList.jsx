import React, { useState } from 'react';
import Nav from '../Components/Nav';
import { Radio } from 'antd';
import CreateABeyblade from './CreateABeyblade';
import { listOfParts } from '../BeybladeParts/ListOfBeybladeParts';

function CreateABeybladeList() {
  // const listOfBeybladeParts = JSON.parse(localStorage.getItem('listOfBeybladeParts'));
  const listOfBeybladeParts = listOfParts;

  const energyLayers = listOfBeybladeParts.filter(part => part.type === 'Energy Layer');
  const forgeDisks = listOfBeybladeParts.filter(part => part.type === 'Forge Disk');
  const drivers = listOfBeybladeParts.filter(part => part.type === 'Driver');

  const listOfEnergyLayers = listOfBeybladeParts?.filter((beybladePart) => {
    return beybladePart.type === 'Energy Layer';
  });

  const listOfForgeDisks = listOfBeybladeParts?.filter((beybladePart) => {
    return beybladePart.type === 'Forge Disk';
  });
  const listOfDrivers = listOfBeybladeParts?.filter((beybladePart) => {
    return beybladePart.type === 'Driver';
  });

  const [player1EnergyLayer, setPlayer1EnergyLayer] = useState(energyLayers[0]);
  const [player2EnergyLayer, setPlayer2EnergyLayer] = useState(energyLayers[1]);
  const [player1ForgeDisk, setPlayer1ForgeDisk] = useState(forgeDisks[0]);
  const [player2ForgeDisk, setPlayer2ForgeDisk] = useState(forgeDisks[1]);
  const [player1Driver, setPlayer1Driver] = useState(drivers[0]);
  const [player2Driver, setPlayer2Driver] = useState(drivers[1]);
  const [player1EnergyLayerLocked, setPlayer1EnergyLayerLocked] = useState(false);
  const [player2EnergyLayerLocked, setPlayer2EnergyLayerLocked] = useState(false);
  const [player1ForgeDiskLocked, setPlayer1ForgeDiskLocked] = useState(false);
  const [player2ForgeDiskLocked, setPlayer2ForgeDiskLocked] = useState(false);
  const [player1DriverLocked, setPlayer1DriverLocked] = useState(false);
  const [player2DriverLocked, setPlayer2DriverLocked] = useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  const handleClick = () => {
    const getRandomIndex = (list) => Math.floor(Math.random() * list.length);
    const setTimeOut = (fn, delay) => setTimeout(fn, delay);

    for (let i = 0; i < 100; i++) {
      setTimeOut(() => {
        if (!player1EnergyLayerLocked) setPlayer1EnergyLayer(listOfEnergyLayers[getRandomIndex(listOfEnergyLayers)]);
        if (!player2EnergyLayerLocked) setPlayer2EnergyLayer(listOfEnergyLayers[getRandomIndex(listOfEnergyLayers)]);
      }, 10 * i);

      setTimeOut(() => {
        if (!player1ForgeDiskLocked) setPlayer1ForgeDisk(listOfForgeDisks[getRandomIndex(listOfForgeDisks)]);
        if (!player2ForgeDiskLocked) setPlayer2ForgeDisk(listOfForgeDisks[getRandomIndex(listOfForgeDisks)]);
      }, 20 * i);

      setTimeOut(() => {
        if (!player1DriverLocked) setPlayer1Driver(listOfDrivers[getRandomIndex(listOfDrivers)]);
        if (!player2DriverLocked) setPlayer2Driver(listOfDrivers[getRandomIndex(listOfDrivers)]);
      }, 30 * i);
    }
  };

  const handlePlayer1EnergyLayerLock = () => {
    setPlayer1EnergyLayerLocked(!player1EnergyLayerLocked);
  };
  const handlePlayer2EnergyLayerLock = () => {
    setPlayer2EnergyLayerLocked(!player2EnergyLayerLocked);
  };
  const handlePlayer1ForgeDiskLock = () => {
    setPlayer1ForgeDiskLocked(!player1ForgeDiskLocked);
  };
  const handlePlayer2ForgeDiskLock = () => {
    setPlayer2ForgeDiskLocked(!player2ForgeDiskLocked);
  };
  const handlePlayer1DriverLock = () => {
    setPlayer1DriverLocked(!player1DriverLocked);
  };
  const handlePlayer2DriverLock = () => {
    setPlayer2DriverLocked(!player2DriverLocked);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div className='create-a-beyblade'>
          <div className='sub-header'>Create a Beyblade</div>
          <div className='player-radio'>
            <Radio.Group defaultValue={1} buttonStyle="solid" onChange={(e) => { setNumberOfPlayers(e.target.value); }}>
              <Radio.Button value={1}>1 Player</Radio.Button>
              <Radio.Button value={2}>2 Players</Radio.Button>
            </Radio.Group>
          </div>
          <div className='randomize-button'>
            <button onClick={handleClick}>
              Randomize
            </button>
          </div>
          <CreateABeyblade
            playerNumber={1}
            energyLayer={player1EnergyLayer}
            forgeDisk={player1ForgeDisk}
            driver={player1Driver}
            energyLayerLocked={player1EnergyLayerLocked}
            forgeDiskLocked={player1ForgeDiskLocked}
            driverLocked={player1DriverLocked}
            setEnergyLayerLocked={handlePlayer1EnergyLayerLock}
            setForgeDiskLocked={handlePlayer1ForgeDiskLock}
            setDriverLocked={handlePlayer1DriverLock}
          />
          {numberOfPlayers === 2 && (
            <div>
              <CreateABeyblade
                playerNumber={2}
                energyLayer={player2EnergyLayer}
                forgeDisk={player2ForgeDisk}
                driver={player2Driver}
                energyLayerLocked={player2EnergyLayerLocked}
                forgeDiskLocked={player2ForgeDiskLocked}
                driverLocked={player2DriverLocked}
                setEnergyLayerLocked={handlePlayer2EnergyLayerLock}
                setForgeDiskLocked={handlePlayer2ForgeDiskLock}
                setDriverLocked={handlePlayer2DriverLock}
              />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default CreateABeybladeList;
