import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal";
import { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
    // Here we can see the use of "ref's", instead of state. 
    // For only reading a value refs are better. Refs shouldn't be used to manipulate the DOM.  
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (bigger than 1)."
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";


    }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type="age"
                        name="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit ">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;
