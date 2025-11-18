import { useContext } from "react";
import { AppContext } from "./App";

function Detail() {
  const { selectedCountry, selectedCountryData, setDisplay } =
    useContext(AppContext);

  const jsonDateString = selectedCountryData["visit_date"];
  const dateObject = new Date(jsonDateString);
  const formattedDate = dateObject.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <h1>{selectedCountryData.country_name}</h1>
      <h2>Visited</h2>
      <h3>{formattedDate}</h3>
      <p>{selectedCountryData.memo}</p>
      <img className="pic" src={selectedCountryData.picture}></img>
      <p>{JSON.stringify(selectedCountryData)}</p>
      <button onClick={() => setDisplay("home")}>Back</button>
    </>
  );
}

export default Detail;
