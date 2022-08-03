import React from "react";

const ToDoCounter = ({ total, done }) => {
    return (
        <p className="todo-counter">
            You've completed {done || "0"} of {total || "0"} ToDo's
        </p>
    );
};

export { ToDoCounter };
