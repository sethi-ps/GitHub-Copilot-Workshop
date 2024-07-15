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
      console.log('handleFormSubmit');
        event.preventDefault();
        if (!formData.name) {
          return;
        }
        if (isEditing) {
          onUpdate(formData);
        } else {
          onCreate(formData.name);
        }
        setFormData({ id: '', name: '', isCompleted: false });
        setIsEditing(null);
      };

    const handleEdit = (item) => {
        console.log('handle edit:',item);
        setFormData(item);
        setIsEditing(true);
      };

    const handleCancel = () => {
        setFormData({ id: '', name: '', isCompleted: false });
        setIsEditing(null);
      };

    const completeItem = (item) => {
        console.log('completeItem:',item);
        item.isCompleted = !item.isCompleted;
        onUpdate(item);
      };


    return (
        <div>
            
            {error && <p>{error.Message}</p>}
            <h2>{name}</h2>
            <ul className={'list-group'}>
                {data.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-start">
                        <div><label className={item.isCompleted ? 'text-decoration-line-through' : ''}><input type="checkbox" checked={item.isCompleted} onChange={() => completeItem(item)} /> {item.name}</label>  </div> 
                        <div>
                            <button className="btn btn-primary" onClick={() => handleEdit(item)}>Edit</button>
                            &nbsp;
                            <button className="btn btn-warning" onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            <h2>{isEditing ? 'Edit' : 'New'} Todo</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleFormChange} />
                &nbsp;
                <button className="btn btn-success" type="submit">{isEditing ? 'Update' : 'Create'}</button>
                &nbsp;
                {isEditing && <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>}
            </form>
        </div>
    )
}

export default TodoList;