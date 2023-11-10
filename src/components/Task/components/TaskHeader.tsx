// packages
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// helpers
import useInputText from '@/hooks/useInputText';
import useTaskContext from '@/hooks/useTaskContext';

const TaskHeader: React.FC = () => {
  const { inputText, inputTextHandler } = useInputText();
  const { taskHandler } = useTaskContext();

  const addHandler = () => {
    if (!inputText) return;

    taskHandler({ type: 'ADD', text: inputText });
    inputTextHandler('');
  };

  return (
    <Fragment>
      <div className='mb-8 text-center'>
        <Link to='/' className='text-3xl uppercase tracking-widest text-center select-none'>
          Taskify
        </Link>
      </div>
      <div className='flex justify-between items-center gap-8 mb-4 p-2 bg-[#E5C8E0] rounded-sm'>
        <input
          className='w-full h-auto ml-2 text-neutral-800 bg-transparent outline-none placeholder:text-neutral-500 select-none'
          type='text'
          placeholder='Enter a task'
          value={inputText}
          onChange={e => inputTextHandler(e.target.value)}
        />
        <button
          className='px-4 py-2 text-neutral-300 bg-neutral-800 rounded-sm transition-all delay-100 ease-in-out hover:scale-105 hover:bg-neutral-700 select-none'
          onClick={addHandler}
          disabled={!inputText}
        >
          Go
        </button>
      </div>
    </Fragment>
  );
};

export default TaskHeader;
