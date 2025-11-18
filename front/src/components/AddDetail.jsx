import { TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "./App";

function AddDetail() {
  const { selectedCountryData, setDisplay } = useContext(AppContext);

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
    });

    setDisplay("detail");
  };

  return (
    <>
      <h1>{selectedCountryData.country_name}</h1>
      <h2>No Visit</h2>
      <TextField id="memo" />
      <form method="PATCH" onSubmit={handleSubmit}>
        <label>
          Visit Date :<br></br>
          <input type="date" name="visit_date" />
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
