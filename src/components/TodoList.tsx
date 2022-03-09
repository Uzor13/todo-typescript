import React, {FC} from 'react';
import Todo from "./Todo";
import FilterButton from "./FilterButton";

interface TodoTypes {
    todos: Array<any>,
    setTodos: Function,
    filterMap: any,
    setFilter: Function,
    filterNames: any
    filter: string
}

const TodoList:FC<TodoTypes> = ({todos, setTodos, filterMap, filter, setFilter, filterNames}) => {
    return (
        <div className="todo-list">
            {todos.filter((filterMap[filter])).map((todo): any => {
                return (
                        <Todo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
                )
            })}
            <div className="filter">
                <p>{todos.length} {todos.length > 1 ? 'items' : 'item'} left</p>
                <div className="filter-buttons">
                    {filterNames.map((name: string): JSX.Element => (
                        <FilterButton name={name} key={name} isPressed={name === filter} setFilter={setFilter}/>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TodoList;
