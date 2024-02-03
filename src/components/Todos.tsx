import React from 'react';
import Todo from '../models/todo';
import TodosItem from './TodosItem';

// FC sta per functional component / render props pattern
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return <ul>
        {props.items.map(item => (
            <TodosItem key={item.id} text={item.text} />
        ))}
    </ul>
}

export default Todos;