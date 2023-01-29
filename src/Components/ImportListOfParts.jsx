import { Input } from 'antd';
import { useState } from 'react';

export default function ImportListOfParts() {
  const [newListOfData, setNewListOfData] = useState('[]');

  const handleSave = () => {
    localStorage.setItem('listOfBeybladeParts', newListOfData);
  };
  const handleChange = (value) => {
    setNewListOfData(value.target.value);
    console.log(value.target.value);
  };

  return (
    <form>
      <h6>JSON import</h6>
      <Input onChange={handleChange} placeholder='Import JSON list of parts (Will replace current list)' />
      <button onClick={handleSave}>
        Update
      </button>
    </form>
  );
}