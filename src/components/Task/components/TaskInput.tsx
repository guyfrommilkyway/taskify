// packages
import React from 'react';

const TaskInput: React.FC<TaskInputProps> = props => {
  const { inputText, inputTextHandler } = props;

  return (
    <input
      className='w-full h-auto text-neutral-800 border-b border-neutral-500 bg-transparent outline-none placeholder:text-neutral-600'
      type='text'
      placeholder='Enter a task'
      value={inputText}
      onChange={e => inputTextHandler(e.target.value)}
    />
  );
};

export default TaskInput;
