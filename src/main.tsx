// packages
import ReactDOM from 'react-dom/client';

// components
import App from './App.tsx';

// helpers
import TaskContextProvider from './store/task-context.tsx';

// assets
import '@/assets/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>,
);
