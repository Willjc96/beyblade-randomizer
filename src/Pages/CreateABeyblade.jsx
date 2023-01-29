import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import { Checkbox } from 'antd';

function CreateABeyblade() {
  const [listOfBeybladeParts, setListOfBeybladeParts] = useState([]);
  const [energyLayer, setEnergyLayer] = useState(null);
  const [forgeDisk, setForgeDisk] = useState(null);
  const [driver, setDriver] = useState(null);
  const [energyLayerLocked, setEnergyLayerLocked] = useState(false);
  const [forgeDiskLocked, setForgeDiskLocked] = useState(false);
  const [driverLocked, setDriverLocked] = useState(false);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('listOfBeybladeParts'));
    if (data) {
      setListOfBeybladeParts(data);
    }
  }, []);

  const listOfEnergyLayers = listOfBeybladeParts?.filter((beybladePart) => {
    return beybladePart.type === 'Energy Layer';
  });
  const listOfForgeDisks = listOfBeybladeParts?.filter((beybladePart) => {
    return beybladePart.type === 'Forge Disk';
  });
  const listOfDrivers = listOfBeybladeParts?.filter((beybladePart) => {
    return beybladePart.type === 'Driver';
  });

  const firstEnergyLayer = listOfEnergyLayers[0];
  const firstForgeDisk = listOfForgeDisks[0];
  const firstDriver = listOfDrivers[0];

  const handleClick = () => {
    for (let i = 0; i < 100; i++) {
      if (!energyLayerLocked) {

        setTimeout(() => {
          const randomEnergyLayer = Math.floor(Math.random() * listOfEnergyLayers.length);
          setEnergyLayer(listOfEnergyLayers[randomEnergyLayer]);
        }, 10 * i); // 1000ms = 1 sec
      }
      if (!forgeDiskLocked) {
        setTimeout(() => {
          const randomForgeDisk = Math.floor(Math.random() * listOfForgeDisks.length);
          setForgeDisk(listOfForgeDisks[randomForgeDisk]);
        }, 20 * i); // 1000ms = 1 sec
      }
      if (!driverLocked) {
        setTimeout(() => {
          const randomDriver = Math.floor(Math.random() * listOfDrivers.length);
          setDriver(listOfDrivers[randomDriver]);
        }, 30 * i); // 1000ms = 1 sec
      }
    }
  };

  const onChange = (partType) => {
    if (partType === 'energyLayer') { setEnergyLayerLocked(!energyLayerLocked); }
    if (partType === 'forgeDisk') { setForgeDiskLocked(!forgeDiskLocked); }
    if (partType === 'driver') { setDriverLocked(!driverLocked); }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div className='create-a-beyblade'>
          <div className='sub-header'>Create a Beyblade</div>
          <div className='randomized-beyblade-parts'>
            <h6 className='beyblade-part-name'>Energy Layer: {energyLayer?.name ?? firstEnergyLayer?.name}</h6>
            <img src={energyLayer?.image ?? firstEnergyLayer?.image} className='beyblade-part-thumbnail' />
            <div className='checkbox'>
              <p className='checkbox-text'>Lock Part:</p>
              <Checkbox onChange={() => onChange('energyLayer')} />
            </div>

            <h6>Forge Disk: {forgeDisk?.name ?? firstForgeDisk?.name}</h6>
            <img src={forgeDisk?.image ?? firstForgeDisk?.image} className='beyblade-part-thumbnail' />
            <div className='checkbox'>
              <p className='checkbox-text'>Lock Part:</p>
              <Checkbox onChange={() => onChange('forgeDisk')} />
            </div>

            <h6>Driver: {driver?.name ?? firstDriver?.name}</h6>
            <img src={driver?.image ?? firstDriver?.image} className='beyblade-part-thumbnail' />
            <div className='checkbox'>
              <p className='checkbox-text'>Lock Part:</p>
              <Checkbox onChange={() => onChange('driver')} />
            </div>

            <button onClick={handleClick} className='randomize-button'>
              Randomize
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default CreateABeyblade;
