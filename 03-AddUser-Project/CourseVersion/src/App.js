import React, {useState} from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: uName, age: uAge, key: Math.random().toString()}];
    })
  }

  return (
    // some projects may accept the current syntax, 
    // only an empty <> if it doesen't we can use React.Fragment or import Fragment
    // the same way we important state and only use fragment.
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
