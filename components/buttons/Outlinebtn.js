import React, { Component } from 'react'
import './Outlinebtn.css'

class Outlinebtn extends Component {
  state = {
    active: false,
  }
  changeState = () => {
    this.setState({
      active: !this.state.active,
    })
  }
  render() {
    return (
      <button
        id="btn"
        className={this.state.active ? 'active' : 'primary'}
        onClick={this.changeState}
      >
        {this.state.active ? 'Read Less' : 'Read More'}
      </button>
    )
  }
}

export default Outlinebtn
