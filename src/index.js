import _ from 'lodash';
import './style.css';

const tasklist = [
  {
    description: 'Cook Food',
    completed: false,
    index: 0,
  },
  {
    description: 'Study Time',
    completed: false,
    index: 1,
  },
];

const loadTasks = () => {
  const tasks = document.querySelector('.tasks');
  tasklist.forEach((task) => {
    const containertask = document.createElement('div');
    const tasklabel = document.createElement('label');
    const taskinput = document.createElement('input');
    containertask.setAttribute('class', 'task-container');
    tasklabel.setAttribute('class', 'currenttask');
    taskinput.setAttribute('type', 'checkbox');
    taskinput.checked = task.completed;
    tasklabel.appendChild(taskinput);
    tasklabel.appendChild(document.createTextNode(task.description));
    containertask.appendChild(tasklabel);
    tasks.appendChild(containertask);
  });
};

const onPageLoad = () => {
  loadTasks();
};

window.onload = onPageLoad();
