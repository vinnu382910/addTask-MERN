import React from "react";
import {TableData} from '../styledComponents'
import { useTheme } from "../App";
import '../App.css';

const TaskList = ({ tasks, onEdit, onDelete}) => {
  const { theme } = useTheme();
  console.log(theme)
    return(
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <TableData  $bgColor={theme.bgColor} $textColor={theme.textColor} data-label="Title">{task.title}</TableData>
            <TableData  $bgColor={theme.bgColor} $textColor={theme.textColor} data-label="Description">{task.description}</TableData>
            <TableData  $bgColor={theme.bgColor} $textColor={theme.textColor} data-label="Due Date">{task.dueDate}</TableData>
            <TableData  $bgColor={theme.bgColor} $textColor={theme.textColor} data-label="Status">{task.status}</TableData>
            <TableData  $bgColor={theme.bgColor} $textColor={theme.textColor} data-label="Actions">
              <button className="edit-btn" onClick={() => onEdit(task)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
            </TableData>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TaskList;
