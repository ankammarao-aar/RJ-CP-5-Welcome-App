// Write your code here
import {Component} from 'react'
import './index.css'

const Button = i => {
  const {className, text, onClick} = i

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

class Welcome extends Component {
  state = {isSubscribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  changeText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const text = this.changeText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <Button className="subscribe" onClick={this.onSubscribe} text={text} />
      </div>
    )
  }
}

export default Welcome
