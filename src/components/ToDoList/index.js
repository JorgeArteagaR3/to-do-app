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
        <div>
            <ToDoCounter total={todos.length || "0"} done={done || "0"} />
            <ToDoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
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
                <p>Add a new To Do</p>
            )}
        </div>
    );
};

export { ToDoList };
