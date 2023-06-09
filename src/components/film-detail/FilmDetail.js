import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CardContent, CardActions, CardMedia  } from '@mui/material';
import "./FilmDetail.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FilmDetail = ({film}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button fullWidth={true} variant="outlined" color='inherit' onClick={handleOpen}><Typography variant="h6" align='center'>Trailer</Typography></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" color={localStorage.getItem("mode") === "dark" ? "white" : "black"}>
            {film.title}
          </Typography>
          <CardMedia component="iframe" src={film.video} allow="autoPlay" className='video'/>
          {/* <Typography align='center' sx={{ mt: 2 }} color={localStorage.getItem("mode") === "dark" ? "white" : "black"}>
            {film.year}
          </Typography>
          <Typography align='center' sx={{ mt: 2 }} color={localStorage.getItem("mode") === "dark" ? "white" : "black"}>
            {film.nation}
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}

export default FilmDetail;