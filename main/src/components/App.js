import React, { Component } from 'react'
import RobotList from './RobotList'
import RobotForm from './RobotForm'

class App extends Component {
  render() {
    return (
      <div>
      	A list of robots
      	<RobotList />
      	RobotForm
      	<RobotForm />
      </div>
    )
  }
}

export default App
