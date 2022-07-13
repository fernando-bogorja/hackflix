import { useState } from "react";
import { Box } from "@mui/material";
import { effects } from "../../theme";
import MyModal from "../modal/MyModal";

const Movie = ({ movie }) => {
  const { poster_path } = movie;
  const posterPath = "https://image.tmdb.org/t/p/original" + poster_path;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      {show ? (
        <MyModal show={show} handleClose={handleClose} movie={movie} />
      ) : (
        <></>
      )}
      <Box
        onClick={() => setShow(true)}
        display="flex"
        sx={{ padding: "20px" }}
        border="3px solid red"
      >
        <img
          style={{ width: "400px", borderRadius: "5px" }}
          className={effects.zoom}
          src={posterPath}
          alt="Movie_Poster"
        />
      </Box>
    </>
  );
};

export default Movie;
