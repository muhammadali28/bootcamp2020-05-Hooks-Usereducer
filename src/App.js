import React,{useState} from 'react';
import './App.css';
import Parent from './parents';
import CounterContext from './countercontext';

function App() {
  let countState =useState(1)//countState==[count,setcount]
  return (
    <CounterContext.Provider value={countState}>
    <div>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
