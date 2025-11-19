import { useContext } from "react";
import { AppContext } from "./App";

function Search() {
  const { visitData, setDisplay, selectedCountryData, setSelectedCountryData } =
    useContext(AppContext);
  const allCountries = visitData.map((data) => data.country_name);

  const selectCountry = (country) => {
    fetch("/countries/" + country)
      .then((res) => res.json())
      .then((data) => {
        setSelectedCountryData(data);
        if (data.is_visited) {
          setDisplay("detail");
        } else {
          setDisplay("addDetail");
        }
      });
  };

  return (
    <>
      <div>Select Country</div>
      <select
        value={selectedCountryData.country_name}
        onChange={(e) => selectCountry(e.target.value)}
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
