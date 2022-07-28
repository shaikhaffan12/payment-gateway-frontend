import * as React from 'react';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './MessageModal.css';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    boxShadow: 24,
    border: '2px solid white',
    p: 4,
    
  }
  ;

export default function MessageModal(props) {
  
  const {message, setMessage} = props
  const handleClose = () => setMessage(false);
  
  return (
    <div>
         
      <Modal
        open={message}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-content">
            <Box sx={{right: "10%"}}>
                <CloseIcon  onClick = {handleClose} sx = {{cursor: "pointer"}} />
            </Box>
            
            <CheckCircleIcon sx = {{ fontSize: "100px", color : "#5dcc1a"}} style = {{ position:"relative", left: "35%", right: "50%"}}/>
            
            
          <Typography id="modal-modal-title" variant="h6" component="h2" sx = {{ fontWeight: "bold", textAlign: "center", left:"50%" }}>
            Payment Successful
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: "center" }}>
            Order is Successful You will Get Product Soon...
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3, textAlign: "center" }}>
            Get ready to experience the spatial audio with adaptive EQ that turns music to your ears.
          </Typography>
        </Box>
      </Modal>
       
    </div>
  );
}
