import { useContext } from "react";
import { AppContext } from "./App";

function SearchCountry() {
  const { setDisplay } = useContext(AppContext);

  return (
    <>
      <button id="addVisit" onClick={() => setDisplay("search")}>
        Search country
      </button>
    </>
  );
}

export default SearchCountry;
