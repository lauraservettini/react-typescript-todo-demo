import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos'
import Todo from './models/todo';

function App() {
  const todos = [
      new Todo('Learn React'),
      new Todo('Learn Typescript')
    ];

  const [ todosList, setTodosList] = useState<Todo[]>([
    ...todos
  ]);

  // const items = [
  //   'Learn React',
  //   'Learn Typescript'
  // ]

  function handleAddTodo(text: string){
    const newTodo = new Todo(text);
    setTodosList( (prevList: Todo[]) => [...prevList, newTodo]);
  }

  return (
    <>
      <div>
        <NewTodo onAddTodo={handleAddTodo} />
        <Todos items={todosList}></Todos>
      </div>
    </>
  )
}

export default App
