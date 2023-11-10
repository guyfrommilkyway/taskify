// packages
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// assets

const TaskHeader: React.FC = () => {
  return (
    <Fragment>
      <div className='mb-8 text-center'>
        <Link
          to='/'
          className='text-3xl uppercase tracking-tighter text-center transition-all delay-100 ease-in-out hover:underline'
        >
          Taskify
        </Link>
      </div>
      <div className='flex justify-between items-center gap-8 mb-4 p-2 bg-[#D7BCE8] rounded-md'>
        <input
          className='w-full h-auto ml-2 text-neutral-800 bg-transparent outline-none placeholder:text-neutral-500'
          type='text'
          placeholder='Enter a task'
        />
        <button className='px-4 py-2 text-sm text-neutral-300 bg-neutral-800 rounded-md transition-all delay-100 ease-in-out hover:scale-105 hover:bg-neutral-700'>
          Search
        </button>
      </div>
    </Fragment>
  );
};

export default TaskHeader;
