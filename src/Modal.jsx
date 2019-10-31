import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

function Modal({ isOpen, setIsOpen }) {

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      >
      <main>
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </main>

      <Button onClick={handleClose}>Close</Button>
    </Dialog>
  );
}

export default Modal;
