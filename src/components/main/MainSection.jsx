import Movie from "../movie/Movie";
import MyCarousel from "../carousel/Carousel";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";

const MainSection = () => {
  const [movies, setMovies] = useState([]);
  const [pageScroll, setPageScroll] = useState(1);

  useEffect(() => {
    const getMovies = async (page) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=656cd7209119175fb22f5b490a1fee7c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );

      setMovies((prevState) => [...prevState, ...response.data.results]);
    };

    getMovies(pageScroll);
  }, [pageScroll]);

  return (
    <>
      <MyCarousel movies={movies.splice(0, 10)} />

      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPageScroll(pageScroll + 1)}
        hasMore={true}
        scrollThreshold={0.95}
      >
        <Box
          sx={{ backgroundColor: "rgb(0,0,0)" }}
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          py={3}
        >
          {movies.map((movie, index) => {
            return <Movie key={index} movie={movie} />;
          })}
        </Box>
      </InfiniteScroll>
    </>
  );
};

export default MainSection;
