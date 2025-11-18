import { useContext } from "react";
import { AppContext } from "./App";

function Search() {
  const { visitData, setDisplay, selectedCountry, setSelectedCountry } =
    useContext(AppContext);
  const allCountries = visitData.map((data) => data.country_name);

  return (
    <>
      <div>Select Country</div>
      <select
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setDisplay("detail");
        }}
      >
        {allCountries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </select>
    </>
  );
}

export default Search;
