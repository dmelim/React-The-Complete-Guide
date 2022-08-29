import React from "react";

// React.FC is the type for react functions, we can use generics to tell TS what we expect from props.
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
