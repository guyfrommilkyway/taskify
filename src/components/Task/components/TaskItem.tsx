// packages
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

// components
import TaskText from './TaskText';
import TaskButtons from './TaskButtons';

// helpers
import useInputText from '@/hooks/useInputText';
import useTaskContext from '@/hooks/useTaskContext';
import TaskInput from './TaskInput';

const TaskItem: React.FC<TaskItemProps> = props => {
  const { id, index, text, status } = props;
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const { inputText, inputTextHandler } = useInputText();
  const { taskHandler } = useTaskContext();

  const editModeHandler = () => {
    if (inputText !== text) taskHandler({ type: 'UPDATE', data: { id, text: inputText, status } });

    setIsEditMode(prev => !prev);
    inputTextHandler(isEditMode ? '' : text);
  };

  const taskInputProps = {
    inputText,
    inputTextHandler,
  };

  const taskTextProps = {
    text,
    status,
  };

  const taskButtonProps = {
    id,
    status,
    isEditMode,
    editModeHandler,
  };

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={`flex justify-between items-center gap-8 w-full p-4 rounded-sm select-none ${
            status ? 'bg-[#8A427E]' : 'bg-[#DEBAD8]'
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='w-full'>
            {isEditMode ? <TaskInput {...taskInputProps} /> : <TaskText {...taskTextProps} />}
          </div>
          <TaskButtons {...taskButtonProps} />
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
