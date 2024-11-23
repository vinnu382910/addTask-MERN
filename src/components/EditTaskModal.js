import React, { useState, useEffect } from "react";

const TaskModal = ({ taskToEdit, onSave, onClose }) => {
  const [task, setTask] = useState(taskToEdit);

  // Update state whenever the modal receives a new task
  useEffect(() => {
    setTask(taskToEdit);
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    onClose(); // Close modal after saving
  };

  if (!task) return null; // Don't render modal if no task is selected

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit} className="form-cont">
          <input
            className="addTask-input"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <textarea
            className="add-desc"
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            className="addTask-input"
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
          <select className="addTask-input" name="status" value={task.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="form-addTask-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
