import './index.css'
import TodoList from './Components/TodoList/TodoList';
import TodoForm from './Components/TodoForm/TodoForm';
import Form from './Components/Form/Form'

function App() {

  return (
    <>
    <div className="container">
      <h1>Todo App</h1>
      <div className="todo-app">
        <TodoForm />
        <TodoList />
      </div>
    </div>
    <div className="container">
      <h1>Form</h1>
      <Form />
    </div>
    </>
  )
}

export default App
