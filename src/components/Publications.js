import { Typography } from '@mui/material';

import BasicList from './ProceedingsList.js';

export default function Publications() {
  return (
    <div id="publications-container">
      <Typography  align="left" color="#A26769" variant="h5" >
       Publications
      </Typography>
      <BasicList publicationType="paper"/>
    </div>
  );
}