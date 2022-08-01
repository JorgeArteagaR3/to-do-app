import React, { useState } from "react";
import "./ModalAddToDo.css";
const ModalAddToDo = ({ modal, setModal, addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="form-container">
            <div className="new-todo-form">
                <label htmlFor="newtodo">Type a new thing To Do</label>
                <input
                    type="text"
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
                            addTodo(inputValue);
                            setModal(!modal);
                        }}
                    >
                        Add
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setModal(!modal);
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ModalAddToDo };
