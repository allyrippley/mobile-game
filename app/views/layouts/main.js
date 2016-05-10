import React, { Component } from 'react'
import { Link } from 'react-router'
import s from '../styles'
import Fa from 'react-fontawesome'

import Header from '../containers/header'
import Sidebar from '../components/sidebar'

import io from 'socket.io-client'
// Using "Stateless Functional Components"
// export default function(props) {
// class MainLayout extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     sidebarVisible: false,
  //     status: 'disconnected'
  //   }
  //   this.toggleSidebar = this.toggleSidebar.bind(this)
  // }
const MainLayout = React.createClass({
  getInitialState() {
    return {
      sidebarVisible: false,
      status: 'disconnected',
      title: ''
    }
  },
  componentWillMount() {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect)
    this.socket.on('disconnect', this.disconnect)
    this.socket.on('welcome', this.welcome)
  },
  connect() {
    window.console.log("connected: " + this.socket.id)
    this.setState({status: 'connected'})
  },
  disconnect(){
    window.console.log("disconnected: " + this.socket.id)
    this.setState({status: 'disconnected'})

  },
  welcome(serverState){
    this.setState({title: serverState.title})

  },
  showSidebar() {
    this.setState({
      sidebarVisible: true
    })
  },
  hideSidebar() {
    this.setState({
      sidebarVisible: false
    })
  },
  toggleSidebar(flag) {
    this.setState({
      sidebarVisible: flag
    })
  },
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
              {this.state.title}
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    )
  }
})

export default MainLayout
