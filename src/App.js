import React, {useState} from 'react';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleClickOpen}>Open Modal</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
}

export default App;
