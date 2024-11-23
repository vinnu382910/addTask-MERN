import React, { useState } from "react";
import '../App.css'

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ ...task, id: Date.now() });
    setTask({ title: "", description: "", dueDate: "", status: "Pending" });
  };

  return (
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
      <button type="submit" className="form-addTask-btn">Add Task</button>
    </form>
  );
};

export default AddTask;
