import React from "react";

const ToDoSearch = ({ searchValue, setSearchValue }) => {
    return (
        <input
            className="todo-search"
            onChange={(e) => {
                setSearchValue(e.target.value.toLowerCase());
            }}
            value={searchValue}
            placeholder="Search your ToDo's"
        />
    );
};

export { ToDoSearch };
