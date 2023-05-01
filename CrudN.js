import React, { useState } from 'react';

function CrudN() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setItems([...items, formData]);
    setFormData({ title: '', description: '' });
  };

  const handleDelete = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleEdit = index => {
    const newItems = [...items];
    setFormData(newItems[index]);
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={e =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CrudN;
