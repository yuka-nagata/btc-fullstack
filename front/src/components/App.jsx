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
  const [visitData, setVisitData] = useState([]);

  const value = {
    setDisplay,
    visitData,
  };

  //バックエンドのデータ取得
  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  useEffect(() => {
    fetch("/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(typeof data);
        setVisitData(data);
      });
  }, []);

  //表示させる画面
  if (display === "home") {
    return (
      <>
        <AppContext.Provider value={value}>
          <h1>Travel Map</h1>
          <div className="App">Message from the backend: {message}</div>;
          <div>VisitData : </div>;
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
