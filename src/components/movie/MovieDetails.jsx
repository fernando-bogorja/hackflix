import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Typography, Box, Grid } from "@mui/material";
import { effects } from "../../theme";
import axios from "axios";

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
  const { poster_path } = oneMovie;
  const posterPath = "https://image.tmdb.org/t/p/original" + poster_path;
  return (
    <>
      {Object.entries(oneMovie).length === 0 ? (
        <Box
          display="flex"
          width="100%"
          height="100vh"
          justifyContent="center"
          sx={{ backgroundColor: "rgb(33,31,31)" }}
        >
          <Box width="50%">
            <Box>
              <Typography
                variant="h2"
                textAlign="center"
                sx={{ mt: 5, color: "white" }}
              >
                "Oops... movie not found!"
              </Typography>
            </Box>
            <Box>
              <img
                style={{
                  width: "100%",
                }}
                srcSet={require("../../assets/img/movie-not-found.gif")}
                alt="movie-not-found-gif"
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Grid container>
          <Box
            sx={{ backgroundColor: "rgb(0,0,0)" }}
            display="flex"
            width="100%"
            maxHeight="1200px"
            justifyContent="center"
          >
            <Box
              display="flex"
              width="100%"
              justifyContent="center"
              height="100%"
            >
              <>
                <img
                  style={{
                    position: "relative",
                    width: "100%",
                    opacity: "0.6",
                  }}
                  src={posterPath}
                  alt="Movie_Poster"
                />
                <Box
                  className={effects.zoom}
                  py={15}
                  borderRadius="10px"
                  display="flex"
                  width="80%"
                  flexDirection="column"
                  alignItems="center"
                  color="white"
                  position="absolute"
                  style={{ textShadow: "3px 3px rgb(0,0,0,0.22)" }}
                >
                  <Typography variant="h2" py={5}>
                    {oneMovie.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    textAlign="center"
                    fontSize={25}
                    py={3}
                  >
                    {oneMovie.overview}
                  </Typography>

                  <Box display="flex">
                    <Box display="flex" px={2}>
                      <Typography variant="body1" fontSize={20} py={1}>
                        Movie Average : {oneMovie.vote_average}
                      </Typography>
                    </Box>
                    <Box display="flex" px={2}>
                      <Typography variant="body1" fontSize={20} py={1}>
                        Vote count : {oneMovie.vote_count}
                      </Typography>
                    </Box>
                    <Box display="flex" px={2}>
                      <Typography variant="body1" fontSize={20} py={1}>
                        Popularity: {oneMovie.popularity}
                      </Typography>
                    </Box>
                    <Box display="flex" px={2}>
                      <Typography variant="body1" fontSize={20} py={1}>
                        Released at {oneMovie.release_date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </>
            </Box>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default MovieDetails;
