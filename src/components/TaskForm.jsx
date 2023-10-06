import React, { useState } from 'react';

function TaskForm({ onSubmit, taskToEdit }) {
  const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) {
      alert('Task name cannot be empty');
      return;
    }

    onSubmit({ name: taskName });
    setTaskName('');
  };

  return (
    <div>
      <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">{taskToEdit ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  );
}

export default TaskForm;
