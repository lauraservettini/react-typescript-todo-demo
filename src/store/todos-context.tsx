import React, { useState, createContext } from "react";
import Todo from "../models/todo";

type Props = {
  children?: React.ReactNode
};
export type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};
export const TodosContext = createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: () => {},
});
export const TodosContextProvider: React.FC <Props>= (props) => {
  const [todosList, setTodosList] = useState<Todo[]>([]);

  function handleRemoveItem(id: string) {
    setTodosList((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  }

  function handleAddTodo(text: string) {
    const newTodo = new Todo(text);
    setTodosList((prevList: Todo[]) => [...prevList, newTodo]);
  }

  const ctxValue = {
    items: todosList,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveItem,
  };

  return (
    <TodosContext.Provider value={ctxValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
