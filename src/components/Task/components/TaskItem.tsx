// packages
import React from 'react';

// assets
import { MdModeEdit, MdDelete, MdCheck } from 'react-icons/md';

const TaskItem: React.FC = () => {
  return (
    <div className='flex justify-between items-start gap-8 w-full p-4 bg-[#E8CEE4] rounded-md'>
      <div className='w-full'>
        <p className='text-neutral-800 select-none'>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
      <div className='flex gap-2'>
        <button className='transition-all delay-100 ease-in-out hover:scale-125 '>
          <MdModeEdit className='text-neutral-800' size={20} />
        </button>
        <button className='transition-all delay-100 ease-in-out hover:scale-125 '>
          <MdDelete className='text-neutral-800' size={20} />
        </button>
        <button className='transition-all delay-100 ease-in-out hover:scale-125 '>
          <MdCheck className='text-neutral-800' size={20} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
