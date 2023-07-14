import React, { useState } from 'react';

const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new todo object
    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    // Call the addTodo function with the new todo
    addTodo(newTodo);

    // Clear the form inputs
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create New Todo</h2>
      <form onSubmit={handleSubmit} >
        <div className='toto' id="addtodo">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div> <button type="submit">Add Todo</button></div>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
