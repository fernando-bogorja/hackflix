import "./styles/App.css";
import MyRoutes from "./myRoutes";
import Navbar from "./components/partials/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
    </div>
  );
}

export default App;
