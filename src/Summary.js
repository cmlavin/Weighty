import React from 'react'
import Navbar from './Navbar'
import WeightsDisplay from './WeightsDisplay'
import Progress from './Progress'
import Trends from './Trends'
import Predictions from './Predictions'
import Chart from './Chart'

class Summary extends React.Component {
  render() {
    return (
      <div>
        <WeightsDisplay />
        <Progress />
        <Trends />
        <Predictions />
        <Chart />
      </div>
    )
  }
}

export default Summary
