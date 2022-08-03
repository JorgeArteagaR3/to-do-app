import React from "react";

const ToDoCounter = ({ total, done }) => {
    return (
        <p className="todo-counter">
            You've completed {done} of {total} ToDo's
        </p>
    );
};

export { ToDoCounter };
