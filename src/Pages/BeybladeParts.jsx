import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import { Modal, Select, Input } from 'antd';
import PicUpload from '../Components/PicUpload';
import SaveListOfParts from '../Components/SaveListOfParts';
import ImportListOfParts from '../Components/ImportListOfParts';


const beybladePartTypes = [{ label: 'Energy Layer', value: 'energyLayer' }, { label: 'Forge Disk', value: 'forgeDisk' }, { label: 'Driver', value: 'driver' }];

function BeybladeParts() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listOfBeybladeParts, setListOfBeybladeParts] = useState([]);

  const [newBeybladePartType, setNewBeybladePartType] = useState(null);
  const [newBeybladePartName, setNewBeybladePartName] = useState(null);
  const [newBeybladePartImage, setNewBeybladePartImage] = useState(null);

  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('listOfBeybladeParts'));
    if (data) {
      setListOfBeybladeParts(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('listOfBeybladeParts', JSON.stringify(listOfBeybladeParts));
  }, [listOfBeybladeParts]);


  const showModal = (showModal) => {
    setIsModalVisible(showModal);
  };

  function onSubmit() {
    const newBeybladePart = { name: newBeybladePartName, type: newBeybladePartType, image: newBeybladePartImage };
    setNewBeybladePartType(null);
    setNewBeybladePartName(null);
    setNewBeybladePartImage(null);
    setListOfBeybladeParts(listOfBeybladeParts.concat(newBeybladePart));
    showModal(false);
  }

  function handlePartTypeChange(value) {
    setNewBeybladePartType(value);
  }
  function handlePartNameChange(value) {
    setNewBeybladePartName(value.target.value);
  }
  function handlePartImageChange(value) {
    setNewBeybladePartImage(value);
  }


  function returnListOfBeybladePartsByType(typeOfPart) {
    {
      return listOfBeybladeParts.map((beybladePart) => {
        if (beybladePart.type === typeOfPart) {
          return (
            <div className='beyblade-part-card'>
              <h3 className='beyblade-part-card-name'>
                Name: {beybladePart.name}
              </h3>
              <h6 className='beyblade-part-card-type'>Type: {beybladePart.type}</h6>
              <img src={beybladePart.image} className='beyblade-part-thumbnail' />
            </div>
          );
        }
      }
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div className='page'>
          <div className='sub-header'>Beyblade Parts</div>
          <button onClick={() => setFilter(null)}>
            All
          </button>
          <button onClick={() => setFilter(beybladePartTypes[0].value)}>
            {beybladePartTypes[0].label}s
          </button>
          <button onClick={() => setFilter(beybladePartTypes[1].value)}>
            {beybladePartTypes[1].label}s
          </button>
          <button onClick={() => setFilter(beybladePartTypes[2].value)}>
            {beybladePartTypes[2].label}s
          </button>
          <div className='list-of-beyblade-parts'>
            <ul>
              {beybladePartTypes.map((beybladePartType) => {
                if (filter === null || filter === beybladePartType.value) {
                  return (
                    <div>
                      <h5>
                        {beybladePartType.label}s
                      </h5>
                      {returnListOfBeybladePartsByType(beybladePartType.label)}
                    </div>
                  );
                }
              })}
              <button onClick={() => showModal(true)}>
                +
              </button>
              <SaveListOfParts listOfBeybladeParts={listOfBeybladeParts} />
              <ImportListOfParts />
            </ul>
          </div>
          <Modal className="add-beyblade-modal" onOk={onSubmit} onCancel={() => setIsModalVisible(false)} title="Add a new Beyblade part" open={isModalVisible}>
            <form className="add-beyblade-form" onSubmit={onSubmit}>
              <Select style={{ width: 200 }} value={newBeybladePartType} placeholder='Part Type' onChange={(e) => handlePartTypeChange(e)}>
                {beybladePartTypes.map((beybladePartType) => {
                  return (
                    <option value={beybladePartType.label} key={beybladePartType.value} />
                  );
                })}
              </Select>
              <Input name='JSON' placeholder='Name of Part' onChange={handlePartNameChange} value={newBeybladePartName} />
              <PicUpload handlePartImageChange={handlePartImageChange} value={newBeybladePartImage} />
            </form>
          </Modal>
        </div>
      </header >
    </div >
  );
}

export default BeybladeParts;