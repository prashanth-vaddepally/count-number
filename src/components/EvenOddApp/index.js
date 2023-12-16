import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  Incrementing = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  evenOddType = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  theCount = (count) => 
    return count
  

  render() {
    return (
      <div className="the-container">
        <h1 className="count-edit">Count {this.theCount}</h1>

        <p className="even-odd-edit">Count is {this.evenOddType}</p>

        <button type="button" onClick={this.Incrementing}>
          Increment
        </button>

        <p>* Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
