import React, { useContext } from 'react';
import TodosItem from './TodosItem';

import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

// FC sta per functional component / render props pattern
const Todos: React.FC = () => {
    const ctx = useContext(TodosContext);
    return <ul className={classes.todos}>
        {ctx.items.map(item => (
            <TodosItem key={item.id} item={item} onRemoveItem={ctx.removeTodo} />
        ))}
    </ul>
}

export default Todos;