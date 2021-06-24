import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = (props) => {
  return (
    <tr>
      <td> {props.text} </td>
      <td> {props.value} </td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h1> statistics </h1>
        <p> No feedback given </p>
      </div>
    )
  }
  return (
    <div>
      <h1> statistics </h1>
      <table>
        <tbody>
          <Statistic text="good" value={props.good} />
          <Statistic text="neutral" value={props.neutral} />
          <Statistic text="bad" value={props.bad} />
          <Statistic text="all" value={props.all} />
          <Statistic text="average" value={(props.good - props.bad) / props.all} />
          <Statistic text="positive" value={((props.good / props.all) * 100) + '%'} />
          </tbody>
      </table>
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