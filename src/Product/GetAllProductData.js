import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AddName from './AddName';
import AddPrice from './AddPrice';
import ButtonTop from './ButtonTop';
import ButtonDown from './ButtonDown';
import AddSubjects from './AddSubjects';
import AddImage from './AddImage';

const initialTask = {
  taskName: '',
  notes: '',
  rating: 0,
  subjects: [],
  image: null,
};

const GetAllProductData = ({ openDialog, setOpenDialog, handleSubmit, task = initialTask }) => {
  const [name, setName] = useState(task.taskName);
  const [price, setPrice] = useState(task.notes);
  const [subjects, setSubjects] = useState(task.subjects);
  const [image, setImage] = useState(task.image);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const createTask = () => {
    const data = {
      name,
      price,
      subjects,
      image,
    };
    handleSubmit(data);
    handleClose();
  };

  return (
    <div>
      <Dialog open={openDialog} maxWidth="lg" fullWidth={true} PaperProps={{ style: { height: '800px', width: '80vw' } }}>
        <div style={{ display: 'flex', width: '600px', height: '600px', borderRadius: '30px' }}>
          <div>
            <DialogContent>
              <ButtonTop handleClose={handleClose} />
              <AddName setName={setName} name={name} />
              <AddPrice setPrice={setPrice} price={price} />
              <AddSubjects setSubject={setSubjects} subject={subjects} />
              <AddImage image={image} setImage={setImage} />
            </DialogContent>
            <DialogActions>
              <ButtonDown handleClose={handleClose} handleSubmit={createTask} />
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default GetAllProductData;
