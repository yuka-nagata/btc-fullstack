import { useContext } from "react";
import { AppContext } from "./App";

function Counter() {
  const { visitData } = useContext(AppContext);

  const visitedData = visitData.filter((data) => data.is_visited === true);
  const percentage = Math.floor((visitedData.length / visitData.length) * 100);

  return (
    <>
      <h2>{percentage} % world</h2>
      <h2>{visitedData.length} countries</h2>
    </>
  );
}

export default Counter;
