import React from "react";

const ToDoSearch = ({ searchValue, setSearchValue }) => {
    return (
        <input
            onChange={(e) => {
                setSearchValue(e.target.value.toLowerCase());
            }}
            value={searchValue}
            placeholder="Search your ToDo's"
        />
    );
};

export { ToDoSearch };
