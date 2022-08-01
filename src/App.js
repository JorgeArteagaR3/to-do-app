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
                <h1>Things To Do</h1>
            </header>
            <div className="main">
                <ToDoList todos={todos} saveTodos={saveTodos} />
                {modal && (
                    <ModalAddToDo
                        modal={modal}
                        setModal={setModal}
                        addTodo={addTodo}
                    />
                )}
                <button
                    type="button"
                    onClick={() => {
                        setModal(!modal);
                    }}
                >
                    Add a new To Do
                </button>
            </div>
        </div>
    );
}

export default App;
