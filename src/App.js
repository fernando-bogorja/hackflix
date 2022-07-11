import "./styles/App.css";
import MyRoutes from "./myRoutes";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <div className="App">
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
