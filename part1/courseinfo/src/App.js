import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
import Hello from "./Hello"
import Display from "./Display"
import Button from "./Button"
import Character from "./Character"
import Board from "./Board"
import History from "./History"

import { useState } from "react"

import "./index.css"

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

  const [name, setName] = useState("Peter")
  const [age, setAge] = useState(20)

  const [ counter, setCounter ] = useState(0)
  const [allClicks, setAll] = useState([])

  const [statistics, setStatistics] = useState({good: 0, neutral: 0, bad: 0})

  const addOne = () => {
    setAll(allClicks.concat("+"))
    setCounter(counter + 1)
  }
  const subtractOne = () => {
    setAll(allClicks.concat("-"))
    setCounter(counter - 1)
  }
  const setZero = () => {
    setAll(allClicks.concat("r"))
    setCounter(0)
  }


  const [player, setPlayer] = useState({name: "Set Name", points: 2, hp: 1, mp: 1, atk: 1, def: 1})
  
  return (
    <>

      <Header text="Give Feedback" />
      <Button onClick={() => console.log(("good"))} text="good" />
      <Button onClick={() => console.log(("neutral"))} text="neutral" />
      <Button onClick={() => console.log(("bad"))} text="bad" />
      <Header text="Statistics" />


      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />

      <h2>Counter:</h2>

      <Display counter={counter} allClicks={allClicks}/>
      <Button onClick={addOne} text="+" />
      <Button onClick={setZero} text="Reset" />
      <Button onClick={subtractOne} text="-" />
      
      <History allClicks={allClicks} />


      <Character player={player} setPlayer={setPlayer}/>
      <Board />
    </>
  );
}

export default App;
