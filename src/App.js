import './App.css';
import React from 'react';
// eslint-disable-next-line
import HookCounterOne from './Components/HookCounterOne';
// eslint-disable-next-line
import ClassCounterOne from './Components/ClassCounterOne';
// eslint-disable-next-line
import ClassMouse from './Components/ClassMouse';
// eslint-disable-next-line
import HookMouse from './Components/HookMouse';
// eslint-disable-next-line
import MouseContainer from './Components/MouseContainer';
// eslint-disable-next-line
import IntervalClassCounter from './Components/IntervalClassCounter';
// eslint-disable-next-line
import IntervalHookCounter from './Components/IntervalHookCounter';
// eslint-disable-next-line
import DataFetching from './Components/DataFetching';
// eslint-disable-next-line


function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      <DataFetching/>
    </div>
  );
}

export default App;
