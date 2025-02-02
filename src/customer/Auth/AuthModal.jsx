import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import {useLocation} from 'react-router-dom'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open }) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const location = useLocation()

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <RegisterForm />
        </Box> */}
        <Box sx={style}>
        {location.pathname === "/login" ? <LoginForm /> : <RegisterForm />}
      </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
