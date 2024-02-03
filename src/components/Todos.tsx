import React from 'react';
import Todo from '../models/todo';
import TodosItem from './TodosItem';

import classes from './Todos.module.css';

// FC sta per functional component / render props pattern
const Todos: React.FC<{items: Todo[], onRemoveItem: (id: string) => void}> = (props) => {
    return <ul className={classes.todos}>
        {props.items.map(item => (
            <TodosItem key={item.id} item={item} onRemoveItem={props.onRemoveItem} />
        ))}
    </ul>
}

export default Todos;