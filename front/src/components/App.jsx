import "./App.css";
import Map from "./Map.jsx";
import Counter from "./Counter.jsx";
import AddVisit from "./AddVisit.jsx";
import Search from "./Search.jsx";
import Detail from "./Search copy.jsx";
import { useEffect, useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [message, setMessage] = useState();
  const [display, setDisplay] = useState("home");

  const value = {
    setDisplay,
  };

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  if (display === "home") {
    return (
      <>
        <AppContext.Provider value={value}>
          <h1>Travel Map</h1>
          <div className="App">Message from the backend: {message}</div>;
          <Counter />
          <Map />
          <AddVisit />
        </AppContext.Provider>
      </>
    );
  } else if (display === "search") {
    return <Search />;
  } else if (display === "detail") {
    return <Detail />;
  }
}

export default App;
