import TaskList from '../modules/Taskslist.js';

describe('TaskList Functions', () => {
  let tasklist;
  const MockStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = MockStorage;

  beforeEach(() => {
    tasklist = new TaskList();
  });

  describe('addTask()', () => {
    test('should add task to tasklist', () => {
      tasklist.addTask('test task', false);
      expect(tasklist.tasklist).toEqual([{ description: 'test task', completed: false, index: 1 }]);
      expect(global.localStorage.setItem).toBeCalledWith('tasklists', JSON.stringify(tasklist.tasklist));
    });
  });

  describe('updateDescription()', () => {
    test('should update task description', () => {
      tasklist.addTask('test task', false);
      const newDescription = 'updated task';
      tasklist.updateDescription({ value: newDescription }, 0);
      expect(tasklist.tasklist[0].description).toBe(newDescription);
    });
  });

  describe('updateStatus()', () => {
    test('should update task status', () => {
      tasklist.addTask('test task', false);
      tasklist.updateStatus(0, true);
      expect(tasklist.tasklist[0].completed).toBe(true);
    });
  });

  describe('removeTask()', () => {
    test('should remove task from tasklist', () => {
      tasklist.addTask('test task', false);
      tasklist.removeTask(0);
      expect(tasklist.tasklist).toEqual([]);
      expect(global.localStorage.setItem).toBeCalledWith('tasklists', JSON.stringify(tasklist.tasklist));
    });
  });
});
