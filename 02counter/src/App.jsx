import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () =>{
     console.log("clicked" , counter )
    counter = counter + 1;
    setCounter(counter)
  }
  const deleteValue = ()=>{
    counter = counter - 1
    setCounter(counter)
  }


  return (
    <>
    <h1>chai with code</h1>
    <h2>Counter Value: {counter}</h2>

    <button 
    onClick={addValue}
    >Increse Value {counter}
      </button>

    <button
    onClick={deleteValue}
    >decrease Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
