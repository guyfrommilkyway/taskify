type TaskActionData = Task | string | undefined;

interface TaskState {
  active: Required<Task[]>;
  completed: Required<Task[]>;
  addHandler: () => void;
  moveHandler: () => void;
  removeHandler: () => void;
  checkHandler: () => void;
}

interface TaskAction {
  type: Required<string>;
  data: Required<TaskActionData>;
}
