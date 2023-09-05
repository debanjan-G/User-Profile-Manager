import { useState } from "react";
import style from "./App.module.css";
import ErrorMessage from "./ErrorMessage";
import "./ErrorMessage.css";

const Form = (props) => {
  const [error, setError] = useState();
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const handleNameChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };
  // props.sendErrorMsg(error);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      // console.log("Please enter a valid name and age(non-empty values).");
      return;
    } else if (enteredAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(>0)",
      });
      return;
    }
    const userDetails = {
      name: enteredName,
      age: enteredAge,
    };
    setEnteredAge("");
    setEnteredName("");
    props.sendData(userDetails);
  };

  return (
    <div>
      {error && (
        <ErrorMessage
          about={error.title}
          msg={error.message}
          setMessage={setError}
        />
      )}
      <form
        onSubmit={handleSubmit}
        style={error ? { opacity: 0.15 } : { opacity: 1 }}
      >
        <div className={"user-input"}>
          <label>Username</label>
          <input
            type="name"
            value={enteredName}
            onChange={handleNameChange}
          ></input>
          <label>Age (Years)</label>
          <input
            type="name"
            value={enteredAge}
            onChange={handleAgeChange}
          ></input>
        </div>
        <button type="submit" className={style.btn}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
