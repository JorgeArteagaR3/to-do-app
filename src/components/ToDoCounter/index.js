import React from "react";

const ToDoCounter = ({ total, done }) => {
    return (
        <div>
            You've completed {done} of {total} ToDo's
        </div>
    );
};

export { ToDoCounter };
