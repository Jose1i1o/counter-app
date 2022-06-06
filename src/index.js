import React from 'react';
import ReactDOM from 'react-dom/client';
// import CounterApp from './01-useState/CounterApp';
import CounterWithHook from './components/01-useState/CounterWithCustomHook';

// import HookApp from './HookApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterWithHook />
  </React.StrictMode>
);