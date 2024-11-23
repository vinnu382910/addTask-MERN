import React, { useReducer, createContext, useContext, useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskModal from "./components/EditTaskModal";
import Popup from 'reactjs-popup';
import { IoIosCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdOutlineFilterAlt } from "react-icons/md";
import { MdOutlineFilterAltOff } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import {FilterButton, HomeCont, SearchContainer, AppHeading} from './styledComponents'
import './App.css'

// Theme context
const ThemeContext = createContext();

// Custom hook for theme
export const useTheme = () => useContext(ThemeContext);

// Theme reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { isDark: !state.isDark };
    default:
      return state;
  }
};

// Initial theme state
const initialThemeState = { isDark: false };

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  
  // Theme state using reducer
  const [themeState, setTheme] = useReducer(themeReducer, initialThemeState);
  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const openEditModal = (task) => setTaskToEdit(task);

  const closeEditModal = () => setTaskToEdit(null);

  // Filter tasks by status
  const filteredTasks = tasks
    .filter((task) =>
      statusFilter === "All" ? true : task.status === statusFilter
    )
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Sort tasks by due date
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const theme = {
    bgColor: themeState.isDark ? "#000" : "#fff",
    textColor: themeState.isDark ? "#fff" : "#000",
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HomeCont $bgColor={theme.bgColor}>
        <div className="heading-cont">
          <AppHeading $textColor={theme.textColor} className="App-header">Task Tracker</AppHeading>
          {themeState.isDark? <MdLightMode style={{fontSize:"30px",color:"#fff", cursor:"pointer"}} onClick={() => setTheme({ type: "TOGGLE_THEME" })} /> : <MdLightMode style={{fontSize:"30px",color:"#000", cursor:"pointer"}} onClick={() => setTheme({ type: "TOGGLE_THEME" })} />}
        </div>
        <hr className="todo-line"></hr>
        <div className="task-add-cont">
          <SearchContainer $textColor={theme.textColor}>
            <input
              className="input-search"
              placeholder="Search Your Task"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </SearchContainer>
          <Popup
              trigger={
                <button className="add-task">
                  Add Your Task
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div
                  style={{
                    padding: "20px",
                    maxWidth: "400px",
                    background: "#f0ffff",
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <button
                    onClick={close}
                    className="close-btn"
                  >
                    <IoIosCloseCircle />
                  </button>
                  <AddTask onAddTask={addTask} />
                </div>
              )}
          </Popup>
        </div>
        <div className="filters-cont">
          <div className="filters">
            {statusFilter === "All" ? <MdOutlineFilterAlt style={{ fontSize: "30px", marginRight: "20px", color: theme.textColor }}/> : <MdOutlineFilterAltOff onClick={(e) => setStatusFilter("All")} style={{fontSize:"30px", marginRight:"20px", cursor:"pointer", color:theme.textColor,}} />}
            <FilterButton $isActive={statusFilter==="Completed"} onClick={() => setStatusFilter("Completed")}>Completed</FilterButton> {/* Using $ as a prefix for transient props in styled-component */}
            <FilterButton $isActive={statusFilter==="In Progress"} onClick={() => setStatusFilter("In Progress")}>In Progress</FilterButton>
            <FilterButton $isActive={statusFilter==="Pending"} onClick={() => setStatusFilter("Pending")}>Pending</FilterButton>
          </div>
          <div className="slect-date">
            <select
              className="sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Sort by Due Date (Ascending)</option>
              <option  value="desc">Sort by Due Date (Descending)</option>
            </select>
          </div>
        </div>
        <TaskList tasks={sortedTasks} onEdit={openEditModal} onDelete={deleteTask} />
        {taskToEdit && (
          <TaskModal
            taskToEdit={taskToEdit}
            onSave={updateTask}
            onClose={closeEditModal}
          />
        )}
      </HomeCont>
    </ThemeContext.Provider>
  );
};

export default App;
