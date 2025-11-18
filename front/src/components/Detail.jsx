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

  const imgs = () => {
    if (selectedCountryData.picture1 !== "") {
      if (selectedCountryData.picture2 !== "") {
        if (selectedCountryData.picture3 !== "") {
          return (
            <>
              <img className="pic" src={selectedCountryData.picture1}></img>
              <img className="pic" src={selectedCountryData.picture2}></img>
              <img className="pic" src={selectedCountryData.picture3}></img>
            </>
          );
        }
        return (
          <>
            <img className="pic" src={selectedCountryData.picture1}></img>
            <img className="pic" src={selectedCountryData.picture2}></img>
          </>
        );
      }
      return <img className="pic" src={selectedCountryData.picture1}></img>;
    }
    return "";
  };

  return (
    <>
      <h1>{selectedCountryData.country_name}</h1>
      <h2>Visited</h2>
      <h3>{formattedDate}</h3>
      <p>{selectedCountryData.memo}</p>
      {imgs()}
      <p>{JSON.stringify(selectedCountryData)}</p>
      <button onClick={() => setDisplay("edit")}>Edit</button>
      <button onClick={() => setDisplay("search")}>Back</button>
    </>
  );
}

export default Detail;
