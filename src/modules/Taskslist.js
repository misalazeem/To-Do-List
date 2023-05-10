import Tasks from './tasks.js';

class TaskList {
  constructor(object = []) {
    this.tasklist = object;
  }

  clearCompleted() {
    this.tasklist = this.tasklist.filter((task) => task.completed === false);
    let count = 1;
    this.tasklist.forEach((task) => {
      task.index = count;
      count += 1;
    });
    localStorage.setItem('tasklists', JSON.stringify(this.tasklist));
  }
  addTask(description, completed, index) {
    index = this.tasklist.length + 1;
    const Task = new Tasks(description, completed, index);
    this.tasklist.push(Task);
    localStorage.setItem('tasklists', JSON.stringify(this.tasklist));
  /*  const tasks = document.querySelector('.tasks');
    tasks.innerHTML = '';
    this.loadTasks();
  */
  }

  readTasks(listtask = []) {
    if (listtask !== null && listtask.length !== 0) {
      let index = 1;
      listtask.tasklist.forEach((task) => {
        this.addTask(task.description, task.completed, index);
        index += 1;
      });
    }
  }

  removeTask(removeindex) {
    if (this.tasklist[removeindex] != null) {
      this.tasklist.splice(removeindex, 1);
      let count = 1;
      this.tasklist.forEach((task) => {
        task.index = count;
        count += 1;
      });
      localStorage.setItem('tasklists', JSON.stringify(this.tasklist));
    }
  }

  updateDescription(description, index) {
    this.tasklist[index].description = description.value;
  }

  updateStatus(index, value) {
    this.tasklist[index].completed = value;
  }
}
export default TaskList;
