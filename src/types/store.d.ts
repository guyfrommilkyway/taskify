/// <reference path="types.ts" />

interface Draggable {
  id: Required<string>;
  index: Required<number>;
}

interface TaskDraggable {
  taskId: Required<string>;
  source: Required<Draggable>;
  destination: Required<Draggable>;
}

interface TaskState {
  active: Required<Task[]>;
  completed: Required<Task[]>;
  taskHandler: ReactDispatch;
}

interface TaskAction {
  type: Required<string>;
  text: string;
  data: Task;
  draggableData: TaskDraggable;
}

interface TaskContextProviderProps {
  children: Component;
}
