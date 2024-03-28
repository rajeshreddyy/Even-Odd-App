// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, parity: 'Even'}

  getRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    if (randomNumber % 2 === 0) {
      this.setState({number: randomNumber, parity: 'Even'})
    } else {
      this.setState({number: randomNumber, parity: 'Odd'})
    }

    console.log(this.state)
  }

  render() {
    const {number, parity} = this.state
    return (
      <div className="container">
        <div className="bg-container">
          <h1>Count {number}</h1>
          <p className="paragraph">Count is {parity}</p>
          <button onClick={this.getRandomNumber} type="button">
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
