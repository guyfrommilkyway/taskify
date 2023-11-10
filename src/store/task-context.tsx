// packages
import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// utils
import insertEl from '@/utils/insertEl';

const ADD = 'ADD';
const UPDATE = 'UPDATE';
const MOVE = 'MOVE';
const REMOVE = 'REMOVE';
const CHECK = 'CHECK';

const initialState = {
  active: [],
  completed: [],
  taskHandler: () => {},
};

export const TaskContext = createContext<TaskState>(initialState);

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  let newTask: Task;
  let newState: TaskState;
  let taskId: string;
  let source: Draggable;
  let destination: Draggable;

  switch (action?.type) {
    case ADD:
      newTask = {
        id: uuidv4(),
        text: action.text!,
        status: false,
      };

      newState = {
        ...state,
        active: [...state.active, newTask],
      };

      return newState;
    case UPDATE:
      if (!action.data.status) {
        newState = {
          ...state,
          active: state.active.map(item =>
            item.id === action.data.id ? { ...item, text: action.data.text } : item,
          ),
        };
      } else {
        newState = {
          ...state,
          completed: state.completed.map(item =>
            item.id === action.data.id ? { ...item, text: action.data.text } : item,
          ),
        };
      }

      return newState;
    case MOVE:
      taskId = action.draggableData.taskId;
      source = action.draggableData.source;
      destination = action.draggableData.destination;

      if (source.id === destination.id) {
        if (source.id === 'active') {
          newTask = state.active.splice(source.index, 1)[0];
          newState = {
            ...state,
            active: insertEl(state.active, newTask, destination.index, state.active.length),
          };
        } else {
          newTask = state.completed.splice(source.index, 1)[0];
          newState = {
            ...state,
            completed: insertEl(
              state.completed,
              newTask,
              destination.index,
              state.completed.length,
            ),
          };
        }
      } else {
        if (source.id === 'active' && destination.id === 'completed') {
          newState = {
            ...state,
            active: state.active.filter(item => item.id !== taskId),
            completed: insertEl(
              state.completed,
              { ...state.active[source.index], status: !state.active[source.index].status },
              destination.index + 1,
              state.completed.length,
            ),
          };
        } else {
          newState = {
            ...state,
            active: insertEl(
              state.active,
              { ...state.completed[source.index], status: !state.completed[source.index].status },
              destination.index + 1,
              state.active.length,
            ),
            completed: state.completed.filter(item => item.id !== taskId),
          };
        }
      }

      return newState;
    case REMOVE:
      if (!action.data.status) {
        newState = {
          ...state,
          active: state.active.filter(item => item.id !== action.data.id),
        };
      } else {
        newState = {
          ...state,
          completed: state.completed.filter(item => item.id !== action.data.id),
        };
      }

      return newState;
    case CHECK:
      if (!action.data.status) {
        newTask = state.active.find(item => item.id === action.data.id)!;

        newState = {
          ...state,
          active: state.active.filter(item => item.id !== action.data.id),
          completed: [...state.completed, { ...newTask, status: true }],
        };
      } else {
        newTask = state.completed.find(item => item.id === action.data.id)!;

        newState = {
          ...state,
          active: [...state.active, { ...newTask, status: false }],
          completed: state.completed.filter(item => item.id !== action.data.id),
        };
      }

      return newState;
    default:
      return state;
  }
};

const TaskContextProvider: React.FC<TaskContextProviderProps> = props => {
  const { children } = props;
  const [tasks, dispatchTask] = useReducer(taskReducer, initialState);

  const value = {
    ...tasks,
    taskHandler: dispatchTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContextProvider;
