import React, { useState } from "react";
import "./ModalAddToDo.css";
const ModalAddToDo = ({ modal, setModal, addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="form-container">
            <form
                className="new-todo-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    inputValue && addTodo(inputValue);
                    setModal(!modal);
                }}
            >
                <label htmlFor="newtodo">Type a new thing To Do</label>
                <input
                    id="newtodo"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <div className="button-container">
                    <button
                        type="button"
                        onClick={() => {
                            setModal(!modal);
                        }}
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            inputValue && addTodo(inputValue);
                            setModal(!modal);
                        }}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export { ModalAddToDo };
