import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";

function App() {
  const [weatherCode, setWeatherCode] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar weatherCode={weatherCode} />

      <main className="flex flex-col flex-grow">
        <Routes>
          <Route path="/" element={<Home setWeatherCode={setWeatherCode} />} />
          <Route path="/forecast" element={<Forecast setWeatherCode={setWeatherCode} />} />
        </Routes>
      </main>

      <Footer weatherCode={weatherCode} />
    </div>
  );
}

export default App;
