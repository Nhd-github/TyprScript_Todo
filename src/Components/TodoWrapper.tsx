import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { Todo as TodoType } from './Todos.types'
import swal from 'sweetalert'

function TodoWrapper() {

    const [todos, setTodos] = useState<TodoType[]>([])
    const addTodo = (title: string) => {
        setTodos([...todos, {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }]);
        return true
    }
    const deleteTodo = (ID: string) => {
        swal({
            title: 'Are sure to Delete this Task?',
            icon: 'warning',
            buttons: ["No", "Yes"]
        }).then(result => {
            if (result) {

                setTodos(todos.filter(todo => todo.id !== ID))
                swal({
                    title: "Task has been deleted",
                    icon: "success"
                })
            }
        })
        return true


    }
    const toggleComplete = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        return true
    }

    return (
        <div className="TodoWrapper">
            <h1>Todo⚡️🦏 </h1>
            {/* Add New Todo Form */}
            <TodoForm addTodo={addTodo} />
            {/* map todos */}
            {todos.map(todo =>

                <Todo todo={todo} key={todo.id} deletTodo={deleteTodo} toggleComplete={toggleComplete} />
            )}
        </div>
    )
}

export default TodoWrapper