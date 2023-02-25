import React from 'react';
import { Checkbox } from 'antd';

function CreateABeyblade({
  playerNumber,
  energyLayer,
  forgeDisk,
  driver,
  energyLayerLocked,
  forgeDiskLocked,
  driverLocked,
  setEnergyLayerLocked,
  setForgeDiskLocked,
  setDriverLocked
}) {
  return (
    <div>
      <h6 className='player-number'>Player {playerNumber}</h6>
      <div className='randomized-beyblade-parts'>
        <div className='randomized-beyblade-section'>
          <h6 className='beyblade-part-name'>Energy Layer: {energyLayer?.name}</h6>
          <img src={energyLayer?.image} className='beyblade-part-thumbnail' />
          <div className='checkbox'>
            <p className='checkbox-text'>Lock Part:</p>
            <Checkbox checked={energyLayerLocked} onChange={setEnergyLayerLocked} />
          </div>
        </div>

        <div className='randomized-beyblade-section'>
          <h6 className='beyblade-part-name'>Forge Disk: {forgeDisk?.name}</h6>
          <img src={forgeDisk?.image} className='beyblade-part-thumbnail' />
          <div className='checkbox'>
            <p className='checkbox-text'>Lock Part:</p>
            <Checkbox checked={forgeDiskLocked} onChange={setForgeDiskLocked} />
          </div>
        </div>

        <div className='randomized-beyblade-section'>
          <h6 className='beyblade-part-name'>Driver: {driver?.name}</h6>
          <img src={driver?.image} className='beyblade-part-thumbnail' />
          <div className='checkbox'>
            <p className='checkbox-text'>Lock Part:</p>
            <Checkbox checked={driverLocked} onChange={setDriverLocked} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateABeyblade;
