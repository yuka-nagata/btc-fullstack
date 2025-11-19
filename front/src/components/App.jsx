import "./App.css";
import Map from "./Map.jsx";
import Counter from "./Counter.jsx";
import SearchCountry from "./ SearchCountry.jsx";
import Search from "./Search.jsx";
import Detail from "./Detail.jsx";
import AddDetail from "./AddDetail.jsx";
import Edit from "./Edit.jsx";
import { useEffect, useState, createContext } from "react";
import { IoEarth } from "react-icons/io5";

export const AppContext = createContext();

function App() {
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
          <h1>
            <IoEarth />
            &thinsp; Travel Map
          </h1>
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
    return (
      <>
        <AppContext.Provider value={value}>
          <Detail />
        </AppContext.Provider>
      </>
    );
  } else if (display === "addDetail") {
    return (
      <>
        <AppContext.Provider value={value}>
          <AddDetail />
        </AppContext.Provider>
      </>
    );
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
