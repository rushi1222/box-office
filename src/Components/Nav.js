import React from 'react'
import { NavLink } from 'react-router-dom'



const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/Starred', text: 'Starred'},
]

function Nav() {

  return (
    <div>
        <ul>

            {
                LINKS.map(item => <li key = {item.to}><NavLink to = {item.to}>{item.text}</NavLink></li>)
            }
        </ul>
    </div>
  )
}

export default Nav