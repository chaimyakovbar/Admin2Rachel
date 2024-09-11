import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { SUBJECTLIST } from '../consts /SubjectsList';

const AddSubjects = ({ setSubject, subject = [] }) => {
  const handleSubjectsChange = (event, value) => {
    setSubject(value);
  };

  return (
    <Autocomplete
      multiple
      options={SUBJECTLIST}
      value={subject}
      onChange={handleSubjectsChange}
      renderInput={(params) => <TextField {...params} label="Subjects" />}
    />
  );
};

export default AddSubjects;
