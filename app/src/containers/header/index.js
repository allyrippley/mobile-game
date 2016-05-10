import React, { Component } from 'react'
import { Link } from 'react-router'
import s from '../../styles'
import Fa from 'react-fontawesome'
import HeaderView from '../../components/header'
// Using "Stateless Functional Components"
class Header extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      selected: 'none'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(option) {
    window.console.log(option);
    const { toggleSidebar } = this.props
    switch(option) {
      case 'sidebar':
        toggleSidebar
        break
      default:
        window.console.log('bad switch: /src/containers/header/index.js line 23');
    }
  }
  render() {
    return (
      <HeaderView clickHandler={this.clickHandler}/>
    );
  }
}

export default Header
