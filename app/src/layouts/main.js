import React, { Component } from 'react'
import { Link } from 'react-router'
import s from '../styles'
import Fa from 'react-fontawesome'

import Header from '../containers/header'
import Sidebar from '../containers/sidebar'

// Using "Stateless Functional Components"
//export default function(props) {
class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarVisible: true
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }
  showSidebar() {
    this.setState({
      sidebarVisible: true
    })
  }
  hideSidebar() {
    this.setState({
      sidebarVisible: false
    })
  }
  toggleSidebar(flag) {
    this.setState({
      sidebarVisible: flag
    })
  }
  render() {
    const SidebarContainer = (
      this.state.sidebarVisible ?
        <div style={s.overlaySideFix}>
          <Sidebar />
        </div>
        : null
      )
    return (
      <div>
        {SidebarContainer}
        <div>
          <Header sidebarHandler={this.toggleSidebar} />
          <div>
            <aside>
            </aside>
            <main style={{margin: 20}}>
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default MainLayout
