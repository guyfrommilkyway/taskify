interface Task {
  id: Required<string>;
  text: Required<string>;
  status: Required<boolean>;
}

interface TaskListProps {
  id: Required<string>;
  title: Required<string>;
  data: Required<Task[]>;
}

interface TaskItemProps {
  id: Required<string>;
  index: Required<number>;
  text: Required<string>;
  status: Required<boolean>;
}

interface TaskButtonsProps {
  id: Required<string>;
  status: Required<boolean>;
  isEditMode: Required<boolean>;
  editModeHandler: () => void;
}

interface TaskInputProps {
  inputText: Required<string>;
  inputTextHandler: (param: string) => void;
}

interface TaskTextProps {
  text: Required<string>;
  status: boolean;
}
