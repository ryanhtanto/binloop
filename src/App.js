import { useState, useEffect } from "react";
import Home from "./pages/home";
import LoadingScreen from "./components/LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";

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
        <>
        <Navbar />
        <Home />
        </>
      )}
    </>
  );
}

export default App;