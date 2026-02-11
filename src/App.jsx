import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main с flex-col + flex-grow */}
      <main className="flex flex-col flex-grow pt-24 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
