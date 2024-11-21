import React from 'react';
import "../tasks.css";
// Include a CSS file for styling

const Tasks = () => {
  // Sample data for tasks
  const tasks = [
    {
      id: 1,
      title: 'Complete React Project',
      description: 'Work on the React To-Do List project and implement all features.',
      status: 'In Progress',
      dueDate: '2024-11-25',
      priority: 'High',
    },
    {
      id: 2,
      title: 'Team Meeting',
      description: 'Attend the team meeting and present the current progress.',
      status: 'Pending',
      dueDate: '2024-11-22',
      priority: 'Medium',
    },
    {
      id: 3,
      title: 'Code Review',
      description: 'Review the code for the backend API integration.',
      status: 'Completed',
      dueDate: '2024-11-20',
      priority: 'Low',
    },
    {
        id: 1,
        title: 'Complete React Project',
        description: 'Work on the React To-Do List project and implement all features.',
        status: 'In Progress',
        dueDate: '2024-11-25',
        priority: 'High',
      },
      {
        id: 2,
        title: 'Team Meeting',
        description: 'Attend the team meeting and present the current progress.',
        status: 'Pending',
        dueDate: '2024-11-22',
        priority: 'Medium',
      },
      {
        id: 3,
        title: 'Code Review',
        description: 'Review the code for the backend API integration.',
        status: 'Completed',
        dueDate: '2024-11-20',
        priority: 'Low',
      },
       {
      id: 1,
      title: 'Complete React Project',
      description: 'Work on the React To-Do List project and implement all features.',
      status: 'In Progress',
      dueDate: '2024-11-25',
      priority: 'High',
    },
    {
      id: 2,
      title: 'Team Meeting',
      description: 'Attend the team meeting and present the current progress.',
      status: 'Pending',
      dueDate: '2024-11-22',
      priority: 'Medium',
    },
    {
      id: 3,
      title: 'Code Review',
      description: 'Review the code for the backend API integration.',
      status: 'Completed',
      dueDate: '2024-11-20',
      priority: 'Low',
    },
    {
        id: 1,
        title: 'Complete React Project',
        description: 'Work on the React To-Do List project and implement all features.',
        status: 'In Progress',
        dueDate: '2024-11-25',
        priority: 'High',
      },
      {
        id: 2,
        title: 'Team Meeting',
        description: 'Attend the team meeting and present the current progress.',
        status: 'Pending',
        dueDate: '2024-11-22',
        priority: 'Medium',
      },
      {
        id: 3,
        title: 'Code Review',
        description: 'Review the code for the backend API integration.',
        status: 'Completed',
        dueDate: '2024-11-20',
        priority: 'Low',
      },
  ];

  return (
    <div className="tasks">
      <h1>Welcome Ganesh</h1>
      <div className="searchbox">
        <input type="text" placeholder="Search something...." />
        <button>Search</button>
      </div>

      <div className="taskCards">
        {tasks.map((task) => (
          <div className="taskCard" key={task.id}>
            <h3 className="taskTitle">{task.title}</h3>
            <p className="taskDescription">{task.description}</p>
            <p className="taskStatus"><strong>Status:</strong> {task.status}</p>
            <p className="taskDueDate"><strong>Due Date:</strong> {task.dueDate}</p>
            <p className="taskPriority"><strong>Priority:</strong> {task.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
