import React from 'react'
import { Link } from 'react-router'
import s from '../../styles'
import Fa from 'react-fontawesome'

// Using "Stateless Functional Components"
export default function(props) {
  function renderItems() {
  return(
    <div>
      <div style={s.sidebarLink}>
       <Fa name="home" />Home
      </div>
      <div style={s.sidebarLink}>
       <Fa name="cogs" />Settings
      </div>
    </div>
  )
  }
  return (
    <div style={s.sidebarContainer}>
      {renderItems()}

    </div>
    );
}
