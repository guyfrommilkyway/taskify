// packages
import React from 'react';

const Container: React.FC<ContainerProps> = props => {
  const { children } = props;
  return (
    <main className='w-full max-w-[1400px] min-h-screen mx-auto p-4 md:p-8 lg:p-10'>
      {children}
    </main>
  );
};

export default Container;
