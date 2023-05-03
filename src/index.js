import './style.css';
import TaskList from './modules/Taskslist.js';

const tasklist = new TaskList();

function onPageLoad() {
  tasklist.loadTasks();
  if (localStorage) {
    const localStorageItem = localStorage.getItem('tasklist');
    console.log(JSON.parse(localStorageItem));
    tasklist.readTasks(JSON.parse(localStorageItem));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.onload = onPageLoad();
  
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  });

  document.querySelector('#addtask').addEventListener('click', () => {
    const value = document.querySelector('#taskdescription').value;
    if (value !== '') {
      const index = tasklist.tasklist.length;
      tasklist.addTask(value, false, index);
      document.querySelector('#taskdescription').value = '';
      console.log(tasklist);
    }
  });

  document.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
      const value = document.querySelector('#taskdescription').value;
      if (value !== '') {
        const index = tasklist.tasklist.length;
        tasklist.addTask(value, false, index);
        document.querySelector('#taskdescription').value = '';
        console.log(tasklist);
      }
    }
  });

  document.addEventListener('click', (event) => {
    const icons = document.querySelectorAll('.delete-icon');
    icons.forEach((button, index) => {
      if(event.target === button) {
        tasklist.removeTask(index);
      }
    });
  });

  document.addEventListener('change', (event) => {
    if(event.target.matches('.taskfield')) {
      const alltasks = document.querySelectorAll('.taskfield');
      alltasks.forEach((description, index) => {
        if(event.target === description) {
         tasklist.updateDescription(description, index);
        }
      });
    }
  });


});