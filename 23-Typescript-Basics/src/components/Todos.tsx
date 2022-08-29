import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Item from "./Item";
import classes from "./Todos.module.css";

// React.FC is the type for react functions, we can use generics to tell TS what we expect from props.
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {/* We can define the key prop without calling it */}
      {todosCtx.items.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
