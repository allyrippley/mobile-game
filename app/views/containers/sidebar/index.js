import React, { Component } from 'react'
import { Link } from 'react-router'
import s from '../../styles'
import Fa from 'react-fontawesome'
import SidebarView from '../../componentss/header'
// Using "Stateless Functional Components"
class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      selected: 'none'
    }
  }

  render() {
    return (
      <SidebarView />
    );
  }
}

export default Sidebar
