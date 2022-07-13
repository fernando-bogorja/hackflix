import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Typography, Box } from "@mui/material";

const MovieDetails = () => {
  const params = useParams();
  const [oneMovie, setOneMovie] = useState({});
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const getMovie = async (movieId) => {
      setIsSearching(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=656cd7209119175fb22f5b490a1fee7c`
        );
        setIsSearching(false);
        setOneMovie(response.data);
      } catch (error) {
        setIsSearching(false);
      }
    };
    getMovie(params.movieId);
  }, []);
  if (isSearching) return <CircularProgress />;

  return (
    <>
      {Object.entries(oneMovie).length === 0 ? (
        <Typography variant="h2">"Sorry, movie does not exist"</Typography>
      ) : (
        <Box>
          <Typography variant="h2">{oneMovie.title}</Typography>
        </Box>
      )}
    </>
  );
};

export default MovieDetails;
