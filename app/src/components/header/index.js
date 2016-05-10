import React from 'react'
import { Link } from 'react-router'
import s from '../../styles'
import Fa from 'react-fontawesome'

// Using "Stateless Functional Components"
export default function(props) {
  window.console.log(props)
  const {clickHandler} = props
  return (
    <header style={s.headerContainer}>
      <span style={s.logoContainer}>
        <Fa style={{ margin: 5, color: '#fff' }} name="star" size="3x" />
      </span>
      <div style={s.headerTitle}>
        <Link style={s.headerLink} to="/" activeClassName="active">Home</Link>
      </div>
      <div style={s.headerActionBar}>
        <div style={s.headerLink} activeClassName="active"><Fa name="search" /></div>
        <div style={s.headerLink} onClick={clickHandler('sidebar')} activeClassName="active"><Fa name="bars" /></div>
      </div>
    </header>
    );
}
