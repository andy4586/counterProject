import  {useState} from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5
  const addValue = () => {
    if(counter < 10){
      setCounter(counter + 1)
    }
  }

  const substractValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={substractValue}
      >Subtract Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
