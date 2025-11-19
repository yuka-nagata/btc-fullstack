import { useContext } from "react";
import { AppContext } from "./App";
import { IconContext } from "react-icons";
import { IoCheckbox } from "react-icons/io5";

function AddDetail() {
  const { setSelectedCountryData, selectedCountryData, setDisplay } =
    useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if (formJson.visit_date === "") {
      return;
    }

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

  return (
    <>
      <h1>{selectedCountryData.country_name}</h1>
      <h2>
        <IconContext.Provider value={{ color: "#ccc" }}>
          <IoCheckbox />
        </IconContext.Provider>
        &thinsp;No Visit
      </h2>
      <form method="PATCH" onSubmit={handleSubmit}>
        <label>
          Visit Date :<br></br>
          <input type="date" name="visit_date" required />
        </label>
        <p>
          <label>
            comment :<br></br>
            <textarea type="text" name="memo" id="inputComment" />
          </label>
        </p>
        <p>
          <label>
            Picture :<br></br>
            <input type="text" name="picture1" placeholder="picture" />
          </label>
        </p>
        <p>
          <button onClick={() => setDisplay("search")}>Back</button>
          <button type="submit">Save</button>
        </p>
      </form>
      <></>
    </>
  );
}

export default AddDetail;
