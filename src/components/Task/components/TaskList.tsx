// packages
import React from 'react';
import TaskItem from './TaskItem';

const TaskList: React.FC<TaskListProps> = props => {
  const { title } = props;

  return (
    <div className='w-full'>
      <h6 className='mb-2 text text-neutral-300 uppercase tracking-tighter select-none'>
        {title}
      </h6>
      <div className='flex flex-col gap-2'>
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
};

export default TaskList;
