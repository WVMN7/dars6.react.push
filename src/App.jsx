
import { useState, useRef } from 'react'
import './App.css'

function App() {
  const todoNameRef = useRef()
  const [todos, setTodos] = useState([])

  function submitHand(e) {
    e.preventDefault()

    setTodos([
      { id: Date.now(), name: todoNameRef.current.value },
      ...todos
    ])

    todoNameRef.current.value = ""
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <form onSubmit={submitHand}>
        <input type="text" placeholder="Todo Name" ref={todoNameRef} required /> <br />
        <button>Create ToDo</button>
      </form>

      {todos.map(todo => (
        <p key={todo.id}>
          {todo.name} 
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </p>
      ))}
    </>
  )
}

export default App
