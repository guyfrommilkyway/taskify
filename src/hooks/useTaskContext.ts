// packages
import { useContext } from 'react';

// helpers
import { TaskContext } from '@/store/task-context';

const useTaskContext = () => useContext(TaskContext);

export default useTaskContext;
