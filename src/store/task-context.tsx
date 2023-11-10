// packages
import React, { createContext, useReducer } from 'react';

const ADD = 'ADD';
const MOVE = 'MOVE';
const REMOVE = 'REMOVE';
const CHECK = 'CHECK';

const initialState = {
  active: [],
  completed: [],
  addHandler: () => {},
  moveHandler: () => {},
  removeHandler: () => {},
  checkHandler: () => {},
};

export const TaskContext = createContext<TaskState>(initialState);

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  let newState: TaskState;

  switch (action.type) {
    case ADD:
      newState = state;
      return newState;
    case MOVE:
      newState = state;
      return newState;
    case REMOVE:
      newState = state;
      return newState;
    case CHECK:
      newState = state;
      return newState;
    default:
      newState = state;
      return newState;
  }
};

const TaskContextProvider: React.FC = () => {
  const [task, dispatch] = useReducer(taskReducer, initialState);

  const addHandler = (data?: TaskActionData) => dispatch({ type: ADD, data });
  const moveHandler = (data?: TaskActionData) => dispatch({ type: MOVE, data });
  const removeHandler = (data?: TaskActionData) => dispatch({ type: REMOVE, data });
  const checkHandler = (data?: TaskActionData) => dispatch({ type: CHECK, data });

  const value = {
    active: task.active,
    completed: task.completed,
    addHandler,
    moveHandler,
    removeHandler,
    checkHandler,
  };

  return <TaskContext.Provider value={value}></TaskContext.Provider>;
};

export default TaskContextProvider;
