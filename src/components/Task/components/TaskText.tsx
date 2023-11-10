// packages
import React from 'react';

const TaskText: React.FC<TaskTextProps> = props => {
  const { text, status } = props;

  return (
    <p className={`select-none ${status ? 'text-neutral-300 line-through' : 'text-neutral-800'}`}>
      {text}
    </p>
  );
};

export default TaskText;
