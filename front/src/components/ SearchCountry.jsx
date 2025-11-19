import { useContext } from "react";
import { AppContext } from "./App";
import { IoSearch } from "react-icons/io5";

function SearchCountry() {
  const { setDisplay } = useContext(AppContext);

  return (
    <>
      <button id="searchCountry" onClick={() => setDisplay("search")}>
        <IoSearch />
        &thinsp; Search country
      </button>
    </>
  );
}

export default SearchCountry;
