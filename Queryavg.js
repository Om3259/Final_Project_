import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Query3 = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <Typography id="modal-title" variant="h6" component="h2">
         Average size of the review characters text
         <h2>65 words</h2>
        </Typography>
        <Typography>
          Total no.of reviews : 143685
        </Typography>
        
        {/* Display the bar chart using Recharts */}
       
        <Button onClick={handleClose} style={{ marginTop: '20px' }}>Close</Button>
      </Box>
    </Modal>
  );
};

export default Query3;