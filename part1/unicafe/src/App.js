import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Buttons = ({ handlers }) => (
  <div className="buttons">
    <Button handleClick={handlers.handleGood} text="Good" />
    <Button handleClick={handlers.handleNeutral} text="Neutral" />
    <Button handleClick={handlers.handleBad} text="Bad" />
  </div>
);

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = (good + bad * -1) / all;
  let positive = (good / all) * 100 + " %";

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlers = {
    handleGood: function () {
      setGood(good + 1);
    },
    handleNeutral: function () {
      setNeutral(neutral + 1);
    },
    handleBad: function () {
      setBad(bad + 1);
    },
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Buttons handlers={handlers} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
