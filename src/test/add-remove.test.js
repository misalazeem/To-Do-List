import TaskList from '../modules/Taskslist';

describe('And and Remove Functionality', () => {
  let tasklist = new TaskList;
  const MockStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  }
  global.localStorage = MockStorage;
  test('add task', () => {
    tasklist.addTask('test task', false, tasklist.length + 1);
    expect(tasklist).toEqual({"tasklist": [{ description: 'test task', completed: false, index: 1 }]});
    expect(global.localStorage.setItem).toBeCalledWith('tasklists', JSON.stringify(tasklist.tasklist));
  });
  test('remove task', () => {
    tasklist.removeTask(0);
    expect(tasklist).toEqual({"tasklist": []});
    expect(global.localStorage.setItem).toBeCalledWith('tasklists', JSON.stringify(tasklist.tasklist));
  });
});
