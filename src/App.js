import { useState } from "react";
import Home from "./pages/home";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;