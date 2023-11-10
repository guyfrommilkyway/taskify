// packages
import React from 'react';

// helpers
import useTaskContext from '@/hooks/useTaskContext';

// assets
import { MdSave, MdModeEdit, MdDelete, MdCheck } from 'react-icons/md';

const TaskButtons: React.FC<TaskButtonsProps> = props => {
  const { id, status, isEditMode, editModeHandler } = props;
  const { taskHandler } = useTaskContext();

  return (
    <div className='flex gap-2'>
      <button
        className='p-2 text-neutral-300 bg-blue-700 rounded-sm outline-none transition-colors delay-100 ease-in-out'
        onClick={editModeHandler}
      >
        {isEditMode ? <MdSave size={18} /> : <MdModeEdit size={18} />}
      </button>
      <button
        className='p-2 text-neutral-300 bg-red-700 rounded-sm outline-none transition-colors delay-100 ease-in-out'
        onClick={() => taskHandler({ type: 'REMOVE', data: { id, status } })}
      >
        <MdDelete size={18} />
      </button>
      <button
        className='p-2 text-neutral-300 bg-green-700 rounded-sm outline-none transition-colors delay-100 ease-in-out'
        onClick={() => taskHandler({ type: 'CHECK', data: { id, status } })}
      >
        <MdCheck size={18} />
      </button>
    </div>
  );
};

export default TaskButtons;
