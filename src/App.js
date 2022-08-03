import { useState } from "react";
import "./App.css";
import { ModalAddToDo } from "./components/ModalAddToDo";
import { ToDoList } from "./components/ToDoList/index";
function App() {
    const localStoreTodos =
        localStorage.getItem("ToDo") &&
        JSON.parse(localStorage.getItem("ToDo"));

    const [todos, setTodos] = useState(localStoreTodos || []);
    const [modal, setModal] = useState(false);

    const saveTodos = (todos) => {
        const strigifiedArr = JSON.stringify(todos);
        localStorage.setItem("ToDo", strigifiedArr);
        setTodos(todos);
    };
    function addTodo(text) {
        let newTodos = [...todos];
        const newTodoItem = {
            task: text,
            completed: false,
            id: new Date().getTime(),
        };
        newTodos.push(newTodoItem);
        saveTodos(newTodos);
    }

    return (
        <div className="App">
            <header>
                <h1 className="logo">Things to do</h1>
            </header>
            <div className="main">
                <ToDoList todos={todos} saveTodos={saveTodos} />

                <div className="add-todo-btn-container">
                    <button
                        className="add-todo-btn"
                        type="button"
                        onClick={() => {
                            setModal(!modal);
                        }}
                    >
                        Add ToDo
                    </button>
                </div>
            </div>
            {modal && (
                <ModalAddToDo
                    modal={modal}
                    setModal={setModal}
                    addTodo={addTodo}
                />
            )}
        </div>
    );
}

export default App;
