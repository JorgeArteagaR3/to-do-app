import React from "react";
import "./ToDo.css";
import { GiCheckMark } from "react-icons/gi";
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
                className={completed ? "check-todo completed" : "check-todo"}
            >
                <GiCheckMark
                    className={
                        completed
                            ? "check-mark completed"
                            : "inactive check-icon"
                    }
                />
            </div>
            <p className={completed && "todo-text"}>{task}</p>
            <div
                className="close-icon"
                onClick={() => {
                    let newTodo = todos.filter((todo) => todo.id !== id);
                    saveTodos(newTodo);
                }}
            ></div>
        </div>
    );
};

export { ToDo };
