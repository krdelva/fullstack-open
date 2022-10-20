import Header from "./Header.js"
import Content from "./Content"
import Total from "./Total"
import Hello from "./Hello"

const App = () => {
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
        exercises: 14
      }
    ]
  }

  const name = "Peter"
  const age = 20
  
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
    </>
  );
}

export default App;
