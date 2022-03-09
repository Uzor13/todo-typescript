import React, {FC} from 'react';
import {FcOk} from "react-icons/fc";
import {FiCircle, FiTrash} from "react-icons/fi";

interface TodoTypes {
    todo: any,
    setTodos: Function,
    todos: Array<any>,
}

const Todo: FC<TodoTypes> = ({todo, setTodos, todos}) => {

    const deleteHandler = (): void => {
        setTodos(todos.filter((el: { id: any; }): boolean => el.id !== todo.id))
        console.log(todo)
    }

    const completeHandler = (): any => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className="todo">
            <div className="todo-text">
                <button onClick={completeHandler}>
                    {todo.completed ? <FcOk/> : <FiCircle/>}
                </button>
                <p className={`${todo.completed ? "completed" : ""}`}>{todo.text}</p>
            </div>

            <button onClick={deleteHandler} className="delete"><FiTrash/></button>
        </div>
    );
};

export default Todo;
