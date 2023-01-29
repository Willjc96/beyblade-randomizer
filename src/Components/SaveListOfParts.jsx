import FileSaver from 'file-saver';

export default function SaveListOfParts({ listOfBeybladeParts }) {
  const handleClick = () => {
    const listOfBeybladePartsJSON = JSON.stringify(listOfBeybladeParts);
    FileSaver.saveAs(new Blob([listOfBeybladePartsJSON], { type: 'application/json;charset=utf-8' }), 'listOfBeybladeParts.json');
  };

  return (
    <button onClick={handleClick}>
      Save list
    </button>
  );
};