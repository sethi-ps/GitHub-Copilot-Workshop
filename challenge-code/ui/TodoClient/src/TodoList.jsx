import { useState } from "react";

function TodoList({ name, data, onCreate, onUpdate, onDelete, error }) {
    const [formData, setFormData] = useState({ id: '', name: '', isCompleted: false });
    const [isEditing, setIsEditing] = useState(null);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!formData.name) {
          return;
        }
        if (isEditing) {
          onUpdate(formData);
        } else {
          onCreate(formData);
        }
        setFormData({ id: '', name: '', isCompleted: false });
        setIsEditing(null);
      };

    const handleEdit = (item) => {
        setFormData(item);
        setIsEditing({
            id: item.id,
            name: item.name,
            isCompleted: item.isCompleted
        });
      };

    const handleCancel = () => {
        setFormData({ id: '', name: '', isCompleted: false });
        setIsEditing(null);
      };


    return (
        <div>
            <h2>New Todo</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleFormChange} />
                <input type="checkbox" name="isCompleted" checked={formData.isCompleted} onChange={handleFormChange} />
                <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
                {isEditing && <button onClick={handleCancel}>Cancel</button>}
            </form>
            {error && <p>{error.Message}</p>}
            <h2>{name}</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <div>{item.title} - {item.completed}</div>
                        <div>
                            <button onClick={() => handleEdit(item)}>Edit</button>
                            <button onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;