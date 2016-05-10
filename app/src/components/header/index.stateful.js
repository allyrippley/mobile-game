import React, { Component } from 'react'
import { Link } from 'react-router'
import s from '../../styles'
import Fa from 'react-fontawesome'

// Using "Stateless Functional Components"
class Header extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      selected: 'none'
    }
  }

  render() {
    return (
      <header style={s.headerContainer}>
        <span style={s.logoContainer}>
          <Fa style={{ margin: 5, color: '#fff' }} name="pied-piper-alt" size="3x" />
        </span>
        <div style={s.headerTitle}>
          <Link style={s.headerLink} to="/" activeClassName="active">Home</Link>
        </div>
        <div style={s.headerActionBar}>
          <Link style={s.headerLink} to="/" activeClassName="active"><Fa name="search" /></Link>
          <Link style={s.headerLink} to="/" activeClassName="active"><Fa name="bars" /></Link>
        </div>
      </header>
    );
  }
}

export default Header
