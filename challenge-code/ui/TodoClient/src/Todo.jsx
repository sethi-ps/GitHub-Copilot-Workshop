import { useState, useEffect } from "react";
import TodoList from "./TodoList";


function Todo() {
    const [data, setData] = useState([]);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        fetchTodoData();
    }, []);

    const fetchTodoData = () => {
        // Simulate fetching todos from API
        const todos = [
            { id: 1, name: "Buy milk", isCompleted: false },
            { id: 2, name: "Buy eggs", isCompleted: false },
            { id: 3, name: "Buy bread", isCompleted: false }
        ];
        setData(todos);
        setMaxId(Math.max(...todos.map(todo => todo.id)));
    };

    const handleCreate = (name) => {
        console.log('handleCreate: ', name);
        const newTodo = {
            id: maxId + 1,
            name: name,
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
        <div className="container">
            <TodoList
                name={'Todo List'}
                data={data}
                onCreate={handleCreate} 
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default Todo;