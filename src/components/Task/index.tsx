// packages
import React from 'react';

// components
import TaskHeader from './components/TaskHeader';
import TaskList from './components/TaskList';

const Task: React.FC = () => {
  return (
    <section className='w-full p-2 md:p-4 lg:p-8'>
      <TaskHeader />
      <div className='flex flex-col lg:flex-row gap-8'>
        <TaskList title='Active' />
        <TaskList title='Completed' />
      </div>
    </section>
  );
};

export default Task;
