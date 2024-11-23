# Task Tracker Application

## Description
The **Task Tracker Application** is a comprehensive task management tool built with React, enabling users to create, manage, and track tasks with advanced filtering and sorting options. The application is equipped with a dynamic theme toggle (Dark and Light mode) implemented using `useReducer`. Tasks can also be edited and updated seamlessly, providing a user-friendly experience.

---

## Key Features
- **Add and Manage Tasks**: Users can create tasks with a title, status, and due date.
- **Filter Tasks by Status**: Filter tasks based on their status, including *All*, *Completed*, *In Progress*, and *Pending*.
- **Sort Tasks by Date**: Sort tasks in ascending or descending order based on the due date.
- **Search Functionality**: Easily search for tasks by their title.
- **Edit and Update Tasks**: Edit existing tasks and update their details effortlessly.
- **Dynamic Theme Switching**: Toggle between **Dark Mode** and **Light Mode** using `useReducer`.
- **Persistent Data Storage**: Tasks are stored in `localStorage`, allowing persistence across sessions.

---

## Packages Used
To run this project successfully, the following packages need to be installed:

### Core Dependencies
1. **React and React DOM**
   ```bash
   npm install react react-dom
   ```
   Versions used: `"react": "^18.3.1", "react-dom": "^18.3.1"`

2. **React Icons**
   ```bash
   npm install react-icons
   ```
   Used for elegant and customizable icons in the application.  
   Version used: `"react-icons": "^5.3.0"`

3. **React Scripts**
   ```bash
   npm install react-scripts
   ```
   Provides a set of scripts and configuration for Create React App.  
   Version used: `"react-scripts": "5.0.1"`

4. **React Popup**
   ```bash
   npm install reactjs-popup
   ```
   Used to create modal popups for adding and editing tasks.  
   Version used: `"reactjs-popup": "^2.0.6"`

5. **Styled Components**
   ```bash
   npm install styled-components
   ```
   A library for writing CSS-in-JS for better styling and component isolation.  
   Version used: `"styled-components": "^6.1.13"`

---

## Installation
To set up and run this project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd task-tracker-app
   ```

2. **Install Dependencies**
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the application in development mode:
   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Highlights
- **Dark and Light Theme**: Implemented using `useReducer`, allowing a global and consistent theme toggle.
- **Efficient Filters**: Tasks are dynamically filtered and rendered based on relevant statuses and due dates.
- **Editable Tasks**: Provides functionality to edit and update tasks directly through an intuitive UI.

---

## Folder Structure
The project has the following key structure:

```
src/
├── components/
│   ├── AddTask.js         # Component for adding new tasks
│   ├── TaskList.js        # Component for displaying the list of tasks
│   ├── EditTaskModal.js   # Component for editing a task
├── styledComponents.js    # Styled components for UI styling
├── App.js                 # Main app file
├── App.css                # Application styles
├── index.js               # Entry point of the application
```

---

## Author
Developed by **Vinay**.  
For queries, feel free to contact me at **vinaykalva712@gmail.com**.  

---

Enjoy using the **Task Tracker Application**! 🎉
