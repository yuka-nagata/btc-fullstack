import "./App.css";
import Map from "./Map.jsx";
import Counter from "./Counter.jsx";
import SearchCountry from "./ SearchCountry.jsx";
import Search from "./Search.jsx";
import Detail from "./Detail.jsx";
import AddDetail from "./AddDetail.jsx";
import Edit from "./Edit.jsx";
import { useEffect, useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [message, setMessage] = useState();
  const [display, setDisplay] = useState("home");
  const [visitData, setVisitData] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("Japan");
  const [selectedCountryData, setSelectedCountryData] = useState();

  const value = {
    setDisplay,
    visitData,
    setSelectedCountry,
    selectedCountryData,
    setSelectedCountryData,
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
        setVisitData(data);
      });
  }, [display]);

  useEffect(() => {
    fetch("/countries/" + selectedCountry)
      .then((res) => res.json())
      .then((data) => {
        setSelectedCountryData(data);
      });
  }, [selectedCountry, display]);

  //表示させる画面
  if (display === "home") {
    return (
      <>
        <AppContext.Provider value={value}>
          <h1>Travel Map</h1>
          <Counter />
          <SearchCountry />
          <Map />
        </AppContext.Provider>
      </>
    );
  } else if (display === "search") {
    return (
      <>
        <AppContext.Provider value={value}>
          <Search />
        </AppContext.Provider>
      </>
    );
  } else if (display === "detail") {
    if (selectedCountryData.is_visited === true) {
      return (
        <>
          <AppContext.Provider value={value}>
            <Detail />
          </AppContext.Provider>
        </>
      );
    } else {
      return (
        <>
          <AppContext.Provider value={value}>
            <AddDetail />
          </AppContext.Provider>
        </>
      );
    }
  } else if (display === "edit") {
    return (
      <>
        <AppContext.Provider value={value}>
          <Edit />
        </AppContext.Provider>
      </>
    );
  }
}

export default App;
