import "./Nav.css"
import logo from "../../Assests/Images/logo.png"


import React from 'react'

export default function Nav() {
  return (
    <nav className="Nav-Bar">
        <div class="flexStart">
            <img id="logo" src={logo} alt=""/><p id="brand">FlexStart</p>
        </div>


        <div class="navLink-Container">
            <a href="" id="navLink"><p id="">Home</p></a>
            <a href="" id="navLink"><p id="">About</p></a>
            <a href="" id="navLink"><p id="">Services</p></a>
            <a href="" id="navLink"><p id="">Portfolio</p></a>
            <a href="" id="navLink"><p id="">Team</p></a>
            <a href="" id="navLink"><p id="">Blog</p></a>
            <a href="" id="navLink"><p id="">Contact</p></a>
            <a href="" id="navLink"><p id="GetStarted">Get Started</p></a>
        </div>
    </nav>
  )
}
