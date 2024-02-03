import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const ctx = useContext(TodosContext);
    const todoText= useRef<HTMLInputElement>(null);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const enteredText = todoText.current?.value;

        if(!enteredText || enteredText?.trim() === ''){
            throw new Error('Insert a valid value');
        }

        ctx.addTodo(enteredText);
    }

    return <form  className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo text</label>
        <input ref={todoText} type='text' id='todo'/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;