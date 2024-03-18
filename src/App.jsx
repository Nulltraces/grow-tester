import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoadingPage from "./components/LoadingPage";
import "./index.css";
import Signup from "./pages/Signup";
import CoinFlipGame from "./components/CoinFlipGame";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoadingPage />} />

        <Route path="/home" element={<LandingPage />} />

        <Route path="/register" element={<Signup />} />

        <Route path="/coin-flip" element={<CoinFlipGame />} />
      </Routes>
    </div>
  );
}

export default App;
