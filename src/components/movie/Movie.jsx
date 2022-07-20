import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { effects } from "../../theme";
import MyModal from "../modal/MyModal";

const Movie = ({ movie }) => {
  const { poster_path } = movie;
  const posterPath = "https://image.tmdb.org/t/p/w500" + poster_path;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      {show ? (
        <MyModal show={show} handleClose={handleClose} movie={movie} />
      ) : (
        <></>
      )}

      <Box onClick={() => setShow(true)} sx={{ padding: "15px" }}>
        <img
          style={{
            width: "250px",
            borderRadius: "5px",
            border: "2px solid red",
          }}
          className={effects.zoom}
          srcSet={
            poster_path
              ? posterPath
              : require("../../assets/img/imgplaceholder.png")
          }
          alt="Movie_Poster"
        />
      </Box>
    </>
  );
};

export default Movie;
