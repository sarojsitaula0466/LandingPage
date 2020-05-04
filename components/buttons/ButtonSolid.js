import React, { Component } from 'react'
import './buttonSolid.css'

class ButtonSolid extends Component {
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

export default ButtonSolid
