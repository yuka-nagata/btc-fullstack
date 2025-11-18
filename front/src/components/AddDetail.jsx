import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "./App";

function AddDetail() {
  const { selectedCountry, selectedCountryData, setDisplay } =
    useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    formJson.is_visited = true;
    console.log(JSON.stringify(formJson));

    fetch("/countries/" + selectedCountryData.country_name, {
      method: "patch",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formJson),
    });
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
            <input type="text" name="memo" placeholder="comment" />
          </label>
        </p>
        <p>
          <label>
            Picture :<br></br>
            <input type="text" name="picture1" placeholder="picture" />
          </label>
        </p>
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
      <></>
    </>
  );
}

export default AddDetail;
