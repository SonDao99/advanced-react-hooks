// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  
  const countReducer = (state, action) => {
    const {type, step} = action;
    const {count} = state;

    switch (type) {
      case 'INCREMENT':
        return {...state, count:count+step};
      default:
        throw new Error(`Unsupported action type ${type}`);
    }
  }

  const [state, dispatch] = React.useReducer(countReducer, {count: initialCount})

  const {count} = state;

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
