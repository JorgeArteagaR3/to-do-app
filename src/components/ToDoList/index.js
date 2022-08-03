import React, { useState } from "react";
import { ToDo } from "../ToDo";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
const ToDoList = ({ todos, saveTodos }) => {
    const done = todos.filter((task) => task.completed).length;
    const [searchValue, setSearchValue] = useState("");
    const searchedTodos = todos.filter((todo) => {
        const taskLower = todo.task.toLowerCase();
        return taskLower.includes(searchValue);
    });
    return (
        <div className="todo-container">
            <ToDoCounter total={todos.length} done={done} />
            {todos.length ? (
                <ToDoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            ) : (
                <></>
            )}
            {todos.length ? (
                searchedTodos.map((todo) => (
                    <ToDo
                        saveTodos={saveTodos}
                        todos={todos}
                        key={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        id={todo.id}
                    />
                ))
            ) : (
                <p className="no-todos">Write your first ToDo</p>
            )}
        </div>
    );
};

export { ToDoList };
