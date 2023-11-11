// packages
import React, { useEffect } from 'react';

// components
import Container from '@/components/Container';
import Task from '@/components/Task';
import useTaskContext from '@/hooks/useTaskContext';

const Home: React.FC = () => {
  const { taskHandler } = useTaskContext();

  // will only run once
  // during initial load
  useEffect(() => {
    taskHandler({ type: 'SET' });

    // clean up function
    return () => {};
  });

  return (
    <Container>
      <Task />
    </Container>
  );
};

export default Home;
