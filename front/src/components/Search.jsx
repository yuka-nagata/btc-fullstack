import { useContext } from "react";
import { AppContext } from "./App";

function Search() {
  const {
    visitData,
    setDisplay,
    selectedCountry,
    setSelectedCountry,
    selectedCountryData,
  } = useContext(AppContext);
  const allCountries = visitData.map((data) => data.country_name);

  return (
    <>
      <div>Select Country</div>
      <select
        value={selectedCountry}
        onChange={async (e) => {
          await setSelectedCountry(e.target.value);
          if (selectedCountryData.is_visited === true) {
            setDisplay("detail");
          } else {
            setDisplay("addDetail");
          }
        }}
      >
        {allCountries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </select>
      <p>
        <button onClick={() => setDisplay("home")}>Home</button>
      </p>
    </>
  );
}

export default Search;
