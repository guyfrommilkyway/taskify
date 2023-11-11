// packages
import React from 'react';

// components
import TaskHeader from './components/TaskHeader';
import TaskList from './components/TaskList';

// helpers
import useTaskContext from '@/hooks/useTaskContext';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const Task: React.FC = () => {
  const { active, completed, taskHandler } = useTaskContext();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (
      (source.droppableId === destination?.droppableId && source.index === destination?.index) ||
      !destination
    )
      return;

    const task = source.droppableId === 'active' ? active[source.index] : completed[source.index];

    taskHandler({
      type: 'MOVE',
      draggableData: {
        taskId: task.id,
        source: { id: source.droppableId, index: source.index },
        destination: { id: destination?.droppableId, index: destination?.index },
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className='w-full p-2 md:p-4 lg:p-8'>
        <TaskHeader />

        <div className='flex flex-col lg:flex-row gap-4'>
          <TaskList id='active' title='Active' data={active} />
          <TaskList id='completed' title='Completed' data={completed} />
        </div>
      </section>
    </DragDropContext>
  );
};

export default Task;
