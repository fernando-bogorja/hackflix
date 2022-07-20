import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { effects } from "../../theme";
import { useNavigate } from "react-router-dom";

function MyModal({ show, handleClose, movie }) {
  const navigate = useNavigate();
  const { poster_path } = movie;
  const posterPath = "https://image.tmdb.org/t/p/original" + poster_path;

  return (
    <Modal
      sx={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
      open={show}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width="70%"
        height="70%"
        display="flex"
        margin="auto"
        position="relative"
        top="8rem"
        sx={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          border: "2px solid red",
        }}
        justifyContent="center"
      >
        <Box display="flex" width="70%">
          <img src={posterPath} alt="Movie_Poster" />
        </Box>
        <Box width="100%">
          <Typography textAlign="center" variant="h6" component="h2" py={5}>
            {movie.title}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body1" py={1} px={2}>
            {movie.overview}
          </Typography>
          <Typography textAlign="center" sx={{ mt: 2 }} variant="body1" p={1}>
            Movie Average : {movie.vote_average}
          </Typography>
          <Button
            className={effects.zoom}
            sx={{ color: "red", fontSize: "18px", paddingTop: "20px" }}
            onClick={() => navigate(`/movie/${movie.id}`, { replace: false })}
          >
            See more
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
export default MyModal;
