import React from 'react';
import Todo from '../models/todo';

import classes from './TodoItem.module.css'

// FC sta per functional component / render props pattern
const TodosItem: React.FC<{item: Todo, onRemoveItem: (id: string) => void}> = (props) => {
    return  <li className={classes.item} onClick={() => props.onRemoveItem(props.item.id)}>{props.item.text}</li>
}

export default TodosItem;