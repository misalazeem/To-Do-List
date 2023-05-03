import './style.css';
import TaskList from './modules/Taskslist.js';

const tasklist = new TaskList();

function onPageLoad() {
  tasklist.loadTasks();
  if (localStorage) {
    const localStorageItem = localStorage.getItem('tasklist');
    tasklist.readTasks(JSON.parse(localStorageItem));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.onload = onPageLoad();

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  });

  document.querySelector('#addtask').addEventListener('click', () => {
    if (document.querySelector('#taskdescription').value !== '') {
      const index = tasklist.tasklist.length;
      tasklist.addTask(document.querySelector('#taskdescription').value, false, index);
      document.querySelector('#taskdescription').value = '';
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      if (document.querySelector('#taskdescription').value !== '') {
        const index = tasklist.tasklist.length;
        tasklist.addTask(document.querySelector('#taskdescription').value, false, index);
        document.querySelector('#taskdescription').value = '';
      }
    }
  });

  document.addEventListener('click', (event) => {
    const icons = document.querySelectorAll('.delete-icon');
    icons.forEach((button, index) => {
      if (event.target === button) {
        tasklist.removeTask(index);
      }
    });
  });

  document.addEventListener('change', (event) => {
    if (event.target.matches('.taskfield')) {
      const alltasks = document.querySelectorAll('.taskfield');
      alltasks.forEach((description, index) => {
        if (event.target === description) {
          tasklist.updateDescription(description, index);
        }
      });
    }

    if (event.target.matches('.check-box')) {
      const allcheckboxes = document.querySelectorAll('.check-box');
      allcheckboxes.forEach((status, index) => {
        if (event.target === status) {
          tasklist.updateStatus(index, status.checked);
        }
      });
    }
  });

  document.querySelector('.clear-button').addEventListener('click', () => {
    for (let i = 0; i < tasklist.tasklist.length; i += 1) {
      if (tasklist.tasklist[i].completed) {
        tasklist.removeTask(i);
        i -= 1;
      }
    }
  });
  
});