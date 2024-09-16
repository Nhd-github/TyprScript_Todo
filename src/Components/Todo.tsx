import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { Todo as TodoType } from './Todos.types'
type TodoProps = {
  todo: TodoType,
  deletTodo: (id: string) => boolean
  toggleComplete: (id: string) => boolean

}
function Todo({ todo, deletTodo, toggleComplete }: TodoProps) {
  return (
    <div className="Todo">
      <p onClick={()=> toggleComplete(todo.id)}
        className={`${todo.completed ? 'completed' : ""}`} // or completed className
      >
        {todo.title}
      </p>
      <div><FontAwesomeIcon icon={faTrashAlt} onClick={() => deletTodo(todo.id)} /></div>
    </div>
  )
}

export default Todo