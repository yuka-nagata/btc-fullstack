import { useContext } from "react";
import { AppContext } from "./App";

function AddVisit() {
  const { setDisplay } = useContext(AppContext);

  return (
    <>
      <button id="addVisit" onClick={() => setDisplay("search")}>
        Add Visit
      </button>
    </>
  );
}

export default AddVisit;
