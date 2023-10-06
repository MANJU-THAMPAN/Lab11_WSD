import React from 'react';

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onEdit(task.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
