import React, { useContext } from 'react';
import CounterContext from './countercontext';

const Child= (props)=> {

let counterValue = useContext(CounterContext) 
console.log(counterValue)

    return(
        <div>
        <h1>
            My name is Ali</h1>
        <h1>
           This is counter context {counterValue}
        </h1>
        <button onClick={()=> {counterValue[1](++counterValue[0])}}>
            Increment
        </button>
        </div>
    )
}

export default Child;
