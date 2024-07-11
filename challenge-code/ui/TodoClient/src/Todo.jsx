import { useState, useEffect } from "react";
import TodoList from "./TodoList";

const term = "Todo";

function Todo() {
    const [data, setData] = useState([]);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        fetchTodoData();
    }, []);

    const fetchTodoData = () => {
        // Simulate fetching todos from API
        const todos = [
            { id: 1, title: "Buy milk", completed: false },
            { id: 2, title: "Buy eggs", completed: false },
            { id: 3, title: "Buy bread", completed: false }
        ];
        setData(todos);
        setMaxId(Math.max(...todos.map(todo => todo.id)));
    };

    const handleCreate = (title) => {
        const newTodo = {
            id: maxId + 1,
            title: title,
            completed: false
        };
        setData([...data, newTodo]);
        setMaxId(maxId + 1);
    };

    const handleUpdate = (item) => {
        const updatedData = data.map(todo => {
            if (todo.id === item.id) {
                return item;
            }
            return todo;
        });
        setData(updatedData);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(todo => todo.id !== id);
        setData(updatedData);
    };
    
    return (
        <div>
            <TodoList
                name={term}
                data={data}
                onCreate={handleCreate} 
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default Todo;