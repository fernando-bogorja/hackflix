import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from "../movie/Movie";
import SearchMovie from "../movie/SearchMovie";
import MyCarousel from "../carousel/Carousel";
import { Box, Container } from "@mui/material";
import { useState, useEffect } from "react";

const MainSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [moviesInCarousel, setMoviesInCarousel] = useState([]);
  const [pageScroll, setPageScroll] = useState(1);

  const handleNext = () => {
    setPageScroll((prevState) => prevState + 1);
  };

  useEffect(() => {
    const getMovies = async (pageScroll) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=656cd7209119175fb22f5b490a1fee7c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageScroll}&with_watch_monetization_types=flatrate`
      );
      setMovies([...movies, ...response.data.results]);
      if (moviesInCarousel.length === 0) {
        setMoviesInCarousel(response.data.results.splice(0, 10));
      }
    };
    getMovies(pageScroll);
  }, [pageScroll]);

  useEffect(() => {
    const getTitle = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=656cd7209119175fb22f5b490a1fee7c&query=${searchInput}&page=${pageScroll}%60`
        );
        setMovies(response.data.results);
      } catch (error) {}
    };

    getTitle();
  }, [searchInput, pageScroll]);

  return (
    <>
      <MyCarousel movies={moviesInCarousel} />

      <Container>
        <SearchMovie setSearchInput={setSearchInput} />

        <InfiniteScroll
          dataLength={movies.length}
          next={handleNext}
          hasMore={true}
          scrollThreshold={0.97}
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
      </Container>
    </>
  );
};

export default MainSection;
