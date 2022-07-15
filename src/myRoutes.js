import { Routes, Route } from "react-router-dom";
import MainSection from "./components/main/MainSection";
import AboutThisProject from "./components/about/AboutThisProject";
import MovieDetails from "./components/movie/MovieDetails";
import Contact from "./components/contact/Contact";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainSection />} />;
      <Route path="/about" element={<AboutThisProject />} />;
      <Route path="/contact" element={<Contact />} />;
      <Route path="/movie/:movieId" element={<MovieDetails />} />
    </Routes>
  );
};

export default MyRoutes;
