import React from "react";
import "./ToDo.css";
import { IoCloseCircle } from "react-icons/io5";
const ToDo = ({ todos, task, id, completed, saveTodos }) => {
    return (
        <div className="todo">
            <div
                onClick={() => {
                    const indexTodo = todos.findIndex((todo) => todo.id === id);
                    let newTodo = [...todos];
                    newTodo[indexTodo].completed = !completed;
                    saveTodos(newTodo);
                }}
                className={completed ? "completed" : ""}
            >
                ✓
            </div>
            <div>{task}</div>
            <div
                onClick={() => {
                    let newTodo = todos.filter((todo) => todo.id !== id);
                    saveTodos(newTodo);
                }}
            >
                <IoCloseCircle size="30" className="gaaaaa" />
            </div>
        </div>
    );
};

export { ToDo };
