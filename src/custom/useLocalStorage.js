import { useEffect, useState } from "react";
function useLocalStorage(todos) {
    const [parsedTodos, setParsedTodos] = useState([]);
    useEffect(() => {
        const localStoreTodos = localStorage.getItem("ToDo");
        if (!localStoreTodos) {
            localStorage.setItem("ToDo", "[]");
            setParsedTodos([]);
        } else {
            const parsedLocal = JSON.parse(localStoreTodos);
            setParsedTodos(parsedLocal);
        }
    }, [todos]);
    return [parsedTodos];
}
export { useLocalStorage };
