import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
import Hello from "./Hello"
import Display from "./Display"
import Button from "./Button"

import { useState } from "react"

const App = (props) => {
  const course = { 
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      { 
        name: "State of a component",
        exercises: 15
      }
    ]
  }

  const name = "Peter"
  const age = 20

  const [ counter, setCounter ] = useState(0)

  const addOne = () => setCounter(counter + 1)
  const subtractOne = () => setCounter(counter - 1)
  const setZero = () => setCounter(0)
  
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />

      <h2>Counter:</h2>
      <div>{counter}</div>
      <button onClick={addOne}>+</button>
      <button onClick={setZero}>Reset</button>
      <button onClick={subtractOne}>-</button>

      <Display counter={counter}/>
      <Button onClick={addOne} text="+" />
      <Button onClick={setZero} text="Reset" />
      <Button onClick={subtractOne} text="-" />
    </>
  );
}

export default App;
