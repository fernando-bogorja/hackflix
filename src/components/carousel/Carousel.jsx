import Carousel from "react-bootstrap/Carousel";
import { effects } from "../../theme";

function MyCarousel({ movies }) {
  return (
    <Carousel>
      {movies.map((movie) => {
        const { backdrop_path, title, overview, vote_average } = movie;
        const backdropPath =
          "https://image.tmdb.org/t/p/original/" + backdrop_path;
        return (
          <Carousel.Item>
            <img
              style={{
                height: "500px",
                objectFit: "cover",
                objectPosition: "top",
              }}
              className="d-block w-100"
              srcSet={backdropPath}
              alt={title}
            />

            <Carousel.Caption style={{ top: "150px" }}>
              <div className={effects.zoom}>
                <h1
                  style={{
                    textShadow: "2px 2px rgb(0,0,0,0.22)",
                  }}
                >
                  {title}
                </h1>
                <p
                  style={{
                    textShadow: "2px 2px rgb(0,0,0,0.22)",
                  }}
                >
                  {overview}
                </p>
                <p
                  style={{
                    textShadow: "2px 2px rgb(0,0,0,0.22)",
                  }}
                >
                  Vote average : {vote_average}
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default MyCarousel;
