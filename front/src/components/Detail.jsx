import { useContext } from "react";
import { AppContext } from "./App";
import { IconContext } from "react-icons";
import { IoCheckbox } from "react-icons/io5";

function Detail() {
  const { selectedCountryData, setDisplay } = useContext(AppContext);

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
      <h2>
        <IconContext.Provider value={{ color: "#67e25fff" }}>
          <IoCheckbox />
        </IconContext.Provider>
        &thinsp;Visited
      </h2>
      <h3>{formattedDate}</h3>
      <p>{selectedCountryData.memo}</p>
      <p>{imgs()}</p>
      {/* <p>{JSON.stringify(selectedCountryData)}</p> */}
      <p>
        <button onClick={() => setDisplay("edit")}>Edit</button>
        <button onClick={() => setDisplay("search")}>Search Country</button>
        <button onClick={() => setDisplay("home")}>Home</button>
      </p>
    </>
  );
}

export default Detail;
