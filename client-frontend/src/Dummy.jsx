/* eslint-disable react/prop-types */
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


/* defining the styles for the modal */
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const Dummy = (props) => {
  // const fetchList=async ()=>
  // {
  //   const res=await axios.get("/api/list")
  //   // const res = await fetch("/api/list");
  //   return res

  // }

  // const {data}=useQuery({
  //   queryKey:['fetch-all'],
  //   queryFn:fetchList
  // })
  // console.log("the data"+data)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          
         
          <div>
      <Button onClick={handleOpen}>Learn More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {props.info}
          </Typography>
        </Box>
      </Modal>
    </div>
        </CardActions>
      </Card>
    </>
  );
};
