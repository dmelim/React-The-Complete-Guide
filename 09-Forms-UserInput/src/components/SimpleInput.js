import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  // useRef has a better use when we only want to store the value once
  const nameInputRef = useRef();
  // if we need to track every single input change or even reset the value, use state is better
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameisValid, setEnteredNameisValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameisValid) {
      console.log("Name Input is valid!");
    }
  }, [enteredNameisValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameisValid(false);
      return;
    }

    setEnteredNameisValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    // nameInputRef.current.value = "" => Not ideal. Don´t manipulate the DOM, the following option is better
    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameisValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
