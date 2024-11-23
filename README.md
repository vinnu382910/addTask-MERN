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
### New Learning and Experience from this Project

Through this project, I gained valuable insights into handling **localStorage** and the differences between development and production environments. Here's what I learned:

### Behavior of **localStorage** in Different Environments

1. **localStorage in Development:**
   - While developing, especially using tools like **React's development server (`npm start`)**, the app runs on a local server. LocalStorage data may seem to reset frequently due to the development server's behavior.
   - Development tools, such as `webpack-dev-server`, sometimes clear `localStorage` when rebuilding or refreshing the environment. This is not typical browser behavior but a feature of these tools.

2. **localStorage in Production:**
   - In the production environment (e.g., when deployed to platforms like Vercel or Netlify), the app is served as static files. The `localStorage` behaves consistently, persisting data across reloads.
   - In this scenario, data in `localStorage` is only cleared when explicitly removed or overwritten in the code.

### Key Differences Between Development and Production:

| **Aspect**                | **Development Environment**                                         | **Production Environment**                           |
|---------------------------|---------------------------------------------------------------------|-----------------------------------------------------|
| Server Behavior           | Development server dynamically rebuilds and may reset data.        | Static server serves files without resets.          |
| localStorage Persistence  | Can reset due to server rebuilds or development tools.             | Persists until cleared programmatically or manually. |
| Page Load Handling        | Hot reloading might interfere with `localStorage`.                 | Normal browser behavior ensures persistence.        |

### How to Handle This in Development:

To ensure `localStorage` behaves as expected during development:
1. Check that your development tools or scripts are not clearing the `localStorage`. For instance, review the `webpack-dev-server` configuration or any related plugins.
2. Test the app in a standard browser environment outside of the development server. For example, open the `index.html` file in a browser after running the production build (`npm run build`).
3. Use **DevTools** in the browser to inspect the `localStorage` (`Application > Local Storage` tab in Chrome DevTools).

### Conclusion:
Understanding how `localStorage` behaves across environments helped me better design and debug the application, ensuring consistent performance after deployment. This learning experience has enhanced my confidence in managing persistent client-side data.

---

## Author
Developed by **Vinay**.  
For queries, feel free to contact me at **vinaykalva712@gmail.com**.  

---

Enjoy using the **Task Tracker Application**! 🎉
