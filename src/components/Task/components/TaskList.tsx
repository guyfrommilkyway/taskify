// packages
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

// components
import TaskItem from './TaskItem';

const TaskList: React.FC<TaskListProps> = props => {
  const { id, title, data } = props;

  return (
    <div className='w-full'>
      <h6 className='mb-2 text text-neutral-300 uppercase tracking-tighter select-none'>{title}</h6>
      <Droppable droppableId={id}>
        {provided => (
          <div
            className='flex flex-col gap-4 w-full p-4 min-h-[500px] bg-[#45404F] rounded-sm'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data.length > 0 &&
              data.map((item, index) => {
                return <TaskItem key={item.id} index={index} {...item} />;
              })}
            {data.length === 0 && (
              <p className='text-sm text-neutral-400 text-center uppercase select-none'>
                no tasks found
              </p>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
