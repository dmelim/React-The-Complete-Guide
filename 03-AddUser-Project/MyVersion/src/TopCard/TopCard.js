import React, {useState} from "react";

import "./TopCard.css"

const TopCard = props => {

    const [enteredUser, setEnteredUser] = useState('');
    const userChangeHandler = event => {
        setEnteredUser(event.target.value);
    };

    const [enteredAge, setEnteredAge] = useState('');
    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();

        const userData = {
            username: enteredUser,
            age: enteredAge
        };
        props.onSaveUserData(userData);
        setEnteredUser('');
        setEnteredAge('');
    }

    return <div className="topCard">
        <form onSubmit={submitHandler}>
            <div>
                <label className="item" htmlFor="">Username</label>
                <input type="text" value={enteredUser} onChange={userChangeHandler}/>
            </div>
            <div>
                <label className="item" htmlFor="">Age</label>
                <input type="number" value={enteredAge} onChange={ageChangeHandler}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default TopCard;