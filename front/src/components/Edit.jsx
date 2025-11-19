import { useContext } from "react";
import { AppContext } from "./App";
import { IconContext } from "react-icons";
import { IoCheckbox } from "react-icons/io5";

function Edit() {
  const { setSelectedCountryData, selectedCountryData, setDisplay } =
    useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    formJson.is_visited = true;

    fetch("/countries/" + selectedCountryData.country_name, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formJson),
    }).then(() =>
      fetch("/countries/" + selectedCountryData.country_name)
        .then((res) => res.json())
        .then((data) => {
          setSelectedCountryData(data);
          setDisplay("detail");
        })
    );
  };

  const defalutVisit = selectedCountryData.is_visited ? (
    <h2>
      <IconContext.Provider value={{ color: "#67e25fff" }}>
        <IoCheckbox />
      </IconContext.Provider>
      &thinsp;Visited
    </h2>
  ) : (
    <h2>
      <IconContext.Provider value={{ color: "#ccc" }}>
        <IoCheckbox />
      </IconContext.Provider>
      &thinsp;No Visit
    </h2>
  );

  const defaultDate = () => {
    const dateString = selectedCountryData.visit_date.substring(0, 10);
    const dateObject = new Date(dateString + "T00:00:00Z");
    dateObject.setUTCDate(dateObject.getUTCDate() + 1);
    return dateObject.toISOString().substring(0, 10);
  };

  return (
    <>
      <h1>{selectedCountryData.country_name}</h1>
      {defalutVisit}
      <form method="PATCH" onSubmit={handleSubmit}>
        <label>
          Visit Date :<br></br>
          <input
            type="date"
            name="visit_date"
            defaultValue={defaultDate()}
            required
          />
        </label>
        <p>
          <label>
            comment :<br></br>
            <textarea
              type="text"
              name="memo"
              defaultValue={selectedCountryData.memo}
              id="inputComment"
            />
          </label>
        </p>
        <p>
          <label>
            Picture :<br></br>
            <input
              type="text"
              name="picture1"
              defaultValue={selectedCountryData.picture1}
            />
          </label>
        </p>
        <p>
          <button onClick={() => setDisplay("detail")}>Back</button>
          <button type="submit">Save</button>
        </p>
      </form>

      <></>
    </>
  );
}

export default Edit;
