import { useRef } from "react";

import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}>= (props) => {
    const todoText= useRef<HTMLInputElement>(null);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const enteredText = todoText.current?.value;

        if(!enteredText || enteredText?.trim() === ''){
            throw new Error('Insert a valid value');
        }

        props.onAddTodo(enteredText);
    }

    return <form  className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo text</label>
        <input ref={todoText} type='text' id='todo'/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;