import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos'
import Todo from './models/todo';

function App() {
  const [ todosList, setTodosList] = useState<Todo[]>([]);

  // const items = [
  //   'Learn React',
  //   'Learn Typescript'
  // ]
  function handleRemoveItem(id: string){
    setTodosList( (prevTodos) => prevTodos.filter(todo => todo.id != id));
  }

  function handleAddTodo(text: string){
    const newTodo = new Todo(text);
    setTodosList( (prevList: Todo[]) => [...prevList, newTodo]);
  }

  return (
    <>
      <div>
        <NewTodo onAddTodo={handleAddTodo} />
        <Todos items={todosList} onRemoveItem={handleRemoveItem}></Todos>
      </div>
    </>
  )
}

export default App
