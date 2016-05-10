import React, { Component } from 'react'
import { Link } from 'react-router'
import s from '../../styles'
import Fa from 'react-fontawesome'
import Sidebar from '../../components/sidebar'
// Using "Stateless Functional Components"
class SidebarContainer extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      selected: 'none'
    }
  }

  render() {
    return (
      <Sidebar />
    );
  }
}

export default SidebarContainer
