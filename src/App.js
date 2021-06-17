import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>
      <h1> statistics </h1>
      <p> good {props.good} </p>
      <p> neutral {props.neutral} </p>
      <p> bad {props.bad} </p>
      <p> all {props.all} </p>
      <p> average {(props.good - props.bad) / props.all} </p>
      <p> positive {(props.good / props.all) * 100}% </p>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGood = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      
      <Statistics good={good} neutral={neutral} bad={bad} all={allClicks}/>
    </div>
  )
}

export default App