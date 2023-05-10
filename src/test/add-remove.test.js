import TaskList from '../modules/Taskslist';

describe('And and Remove Functionality', () => {
  let tasklist = new TaskList;
  const MockStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  }
  global.localStorage = MockStorage;
});