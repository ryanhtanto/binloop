import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoadingScreen from "./components/LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Participant from "./pages/participant";
import Rules from "./pages/rules";
import Waiver from "./pages/waiver";
import NotFound from "./pages/notFound";
import Sponsors from "./components/Sponsors";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
      ) : (
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/participant"
              element={<Participant />}
            />

            <Route
              path="/rules"
              element={<Rules />}
            />

            <Route
              path="/sponsor"
              element={<Sponsors />}
            />

            <Route
              path="/waiver"
              element={<Waiver />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;