import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

const SearchMovie = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const handleChange = (newValue) => {
    setSearchInput(newValue);
  };

  useEffect(() => {
    const getTitle = async (title) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=656cd7209119175fb22f5b490a1fee7c&query=${title}&page=1%60`
        );
        setMovies(response.data.results);
      } catch (error) {}
    };

    getTitle(searchInput);
  }, [searchInput]);

  return (
    <>
      <Box>
        <input
          style={{
            borderRadius: "5px",
            width: "300px",
            marginTop: "1rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
          type="text"
          placeholder="Ingrese una película.."
          onChange={(event) => handleChange(event.target.value)}
        />
      </Box>
      <Box className="container">
        <Box className="row">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default SearchMovie;
