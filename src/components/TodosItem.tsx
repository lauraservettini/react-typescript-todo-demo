import React from 'react';

// FC sta per functional component / render props pattern
const TodosItem: React.FC<{text: string}> = (props) => {
    return  <li>{props.text}</li>
}

export default TodosItem;