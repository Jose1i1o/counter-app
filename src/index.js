import React from 'react';
import ReactDOM from 'react-dom/client';
// import CounterApp from './01-useState/CounterApp';
// import CounterWithHook from './components/01-useState/CounterWithCustomHook';
// import App from './components/02-useEffect/SimpleForm';
// import FormWithCustomHook from './components/02-useEffect/FormWithHook';
/* import FormWithHookRevised from './components/02-useEffect/FormWithHookRevised'; */
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
// import HookApp from './HookApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <MultipleCustomHooks />
  // </React.StrictMode>
);