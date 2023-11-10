// packages
import React from 'react';

// components
import Task from '@/components/Task';

const Home: React.FC = () => {
  return (
    <main className='w-full max-w-[1400px] mx-auto p-4 md:p-8 lg:p-10'>
      <Task />
    </main>
  );
};

export default Home;
